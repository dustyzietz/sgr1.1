import React from 'react';

export const QuiverContext = createContext();

const [quiver, setQuiver] = useState([]);

export function ThemeProvider (props) {
  return (
   <QuiverContext.Provider value={{quiver, setQuiver}}>
     {this.props.children}
     </QuiverContext.Provider>

  )
}
