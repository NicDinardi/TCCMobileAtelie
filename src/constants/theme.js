export const colors = {
  background: '#ffe7daff',      
  backgroundAlt: '#fdebddff', 
  text: '#333333',
  textLight: '#666666',
  primary: '#997a6eff',       
  primaryDark: '#6a483cff',  
  accent: '#d1b3a6ff',       
  white: '#ffffff',
  border: '#f0f0f0',
};

export const typography = {
  fontFamily: 'Poppins_400Regular', 
  fontFamilyBold: 'Poppins_700Bold',
  fontFamilyMedium: 'Poppins_500Medium',
  
  title: {
    fontSize: 26, 
    fontFamily: 'Poppins_700Bold',
    color: colors.text,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Poppins_500Medium',
    color: colors.primary,
  },
  body: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: colors.text,
    lineHeight: 24, 
  },
};

export const layout = {
  containerPadding: 20,
  borderRadius: 12,
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  }
};