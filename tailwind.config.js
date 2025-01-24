// tailwind.config = {
//     theme:{
//         extend:{
//             gridTemplateColumns:{
//                 'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
//             },
//             fontFamily:{
//                 Outfit: ["Outfit", "sans-serif"],
//                 Ovo: ["Ovo", "serif"]
//             },
//             colors:{
//                 lightHover: '#fcf4ff',
//                 darkHover: '#2a004a',
//                 darkTheme: '#11001F',
//             },
//             boxShadow:{
//                 'black': '4px 4px 0 #000',
//                 'white': '4px 4px 0 #fff',       
//             }
//         }
//     },
//     darkMode: 'selector'
// }

tailwind.config = {
    theme: {
        extend: {
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(220px, 1fr))', // Slightly larger grid items
            },
            fontFamily: {
                Outfit: ["Outfit", "sans-serif"],
                Ovo: ["Ovo", "serif"]
            },
            colors: {
                lightHover: '#e4d8ff',  // Softer hover effect with light purple
                darkHover: '#3a1c62',   // Darker purple for hover effectss
                darkTheme: '#1d0033',   // Darker, more vivid theme background
                primary: '#8a4d76',     // Rich purple for accents
                secondary: '#ffcbf2',   // Soft pink to complement dark theme
                accent: '#ff6b81',      // Bright accent for interactive elements
            },
            boxShadow: {
                'black': '4px 4px 12px rgba(0, 0, 0, 0.2)', // Softer, larger shadow for depth
                'white': '4px 4px 12px rgba(255, 255, 255, 0.3)', // Slightly larger white shadow for contrast
                'inset-dark': 'inset 0 0 15px rgba(0, 0, 0, 0.1)',  // Subtle inset shadow for elements
            },
            backgroundImage: {
                'gradient-bg': 'linear-gradient(to bottom, #11001F, #3a1c62)' // Gradient for background elements
            }
        }
    },
    darkMode: 'media', // Using 'media' to switch dark mode based on system preference
}