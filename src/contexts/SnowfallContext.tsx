import React, { createContext, useContext, useState, useCallback } from 'react';

interface SnowfallSettings {
  enabled: boolean;
  intensity: 'light' | 'medium' | 'heavy';
}

interface SnowfallContextType {
  settings: SnowfallSettings;
  toggleSnowfall: () => void;
  setIntensity: (intensity: 'light' | 'medium' | 'heavy') => void;
  setEnabled: (enabled: boolean) => void;
}

const SnowfallContext = createContext<SnowfallContextType | undefined>(undefined);

export const useSnowfall = () => {
  const context = useContext(SnowfallContext);
  if (context === undefined) {
    throw new Error('useSnowfall must be used within a SnowfallProvider');
  }
  return context;
};

interface SnowfallProviderProps {
  children: React.ReactNode;
  defaultEnabled?: boolean;
  defaultIntensity?: 'light' | 'medium' | 'heavy';
}

export const SnowfallProvider: React.FC<SnowfallProviderProps> = ({
  children,
  defaultEnabled = true,
  defaultIntensity = 'medium',
}) => {
  const [settings, setSettings] = useState<SnowfallSettings>({
    enabled: defaultEnabled,
    intensity: defaultIntensity,
  });

  const toggleSnowfall = useCallback(() => {
    setSettings(prev => ({ ...prev, enabled: !prev.enabled }));
  }, []);

  const setIntensity = useCallback((intensity: 'light' | 'medium' | 'heavy') => {
    setSettings(prev => ({ ...prev, intensity }));
  }, []);

  const setEnabled = useCallback((enabled: boolean) => {
    setSettings(prev => ({ ...prev, enabled }));
  }, []);

  const value: SnowfallContextType = {
    settings,
    toggleSnowfall,
    setIntensity,
    setEnabled,
  };

  return (
    <SnowfallContext.Provider value={value}>
      {children}
    </SnowfallContext.Provider>
  );
};
