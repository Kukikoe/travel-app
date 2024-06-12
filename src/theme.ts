import { createTheme, ThemeOptions } from '@mui/material/styles';

import '../public/fonts/font.css';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    transparent: true;
    outlinedRound: true;
  }
}

declare module '@mui/material/ButtonGroup' {
  interface ButtonGroupPropsVariantOverrides {
    transparent: true;
    outlinedRound: true;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: 'SF Pro Text, sans-serif',
  },
  components: {
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiStepper: {
      styleOverrides: {
        '&:first-child': {
          backgroundColor: 'red',
        },
        root: {
          '&.MuiStep-root :first-child': {
            backgroundColor: 'red',
          },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          alignItems: 'center',
          paddingTop: '2px',
          paddingBottom: '2px',

          '& .MuiStepLabel-label': {
            fontSize: '17px',
            fontWeight: 600,
            color: '#000',
            lineHeight: '32px',
            paddingLeft: '11px',

            '&.Mui-active': {
              fontWeight: 600,
              fontSize: '20px',
              color: '#000',
            },
          },
        },
      },
    },
    MuiStepContent: {
      styleOverrides: {
        root: {
          marginLeft: '11px',
          paddingLeft: '32px',
          borderLeft: '2px solid #3C3C432E',
          paddingBottom: '28px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',

          '&:hover': {
            '&& fieldset': {
              borderColor: '#787878',
            },
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#8f8f91',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: '8px',

          '&:hover': {
            '&& fieldset': {
              borderColor: '#787878',
            },
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#8f8f91',
          },
        },
        icon: {
          display: 'none',
        },

        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: 'red',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: '#fff',
          borderColor: '#9797974D',
          color: '#3C3C43CC',
          fontWeight: 400,
          fontSize: '15px',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: 15,

          '&:hover': {
            backgroundColor: '#f5f5f5',
          },

          '&.Mui-selected': {
            backgroundColor: '#d8d8d8 !important',
            '&:hover': {
              backgroundColor: '#f5f5f5',
            },
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'transparent' },
          style: {
            color: '#fff',
            fontWeight: 600,
            fontSize: 15,
            borderRadius: 40,
            padding: '4px 12px',
            background: '#8888884D',

            '&:hover': {
              backgroundColor: '#88888894',
            },

            '.MuiButton-startIcon > *:nth-of-type(1)': {
              fontSize: 32,
            },

            '.MuiButton-startIcon': {
              marginRight: 0,
              marginLeft: -8,
            },
          },
        },
        {
          props: { variant: 'outlinedRound' },
          style: {
            border: '1px solid #00000008',
            borderRadius: 16,

            '.MuiButton-startIcon > *:nth-of-type(1)': {
              fontSize: 24,
            },

            '.MuiButton-startIcon': {
              marginRight: 4,
              marginLeft: -4,
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          height: 32,
          backgroundColor: '#fff',
          color: '#000',
          textTransform: 'capitalize',
          fontWeight: 600,
          fontSize: 15,
          boxShadow: '0px 2px 3px 0px #00000008',

          '&:hover': {
            backgroundColor: '#f5f5f5',
          },

          '&.MuiButton-outlined': {
            border: '1px solid #00000008',
            color: '#000',
            borderRadius: 8,
            padding: '4px 12px',
          },

          '&.MuiButton-text': {
            boxShadow: 'unset',
            color: '#714EFF',
            borderRadius: 8,
            padding: '0 12px',
          },

          '.MuiButton-startIcon > *:nth-of-type(1)': {
            fontSize: 32,
          },

          '.MuiButton-startIcon': {
            marginRight: 4,
            marginLeft: -12,
          },
        },
      },
    },
  },
} as ThemeOptions);
