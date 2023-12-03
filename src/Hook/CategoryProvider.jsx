import { useState } from "react";
import { createContext } from "react";

//category context
export const CategoryContext = createContext()

const CategoryProvider = ({children}) => {

    const [selectedCategory, setSelectedCategory] = useState(null);

  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  const catInfo = {setCategory,selectedCategory}

    return (
        <CategoryContext.Provider value={catInfo}>
                {children}
        </CategoryContext.Provider>
    );
};

export default CategoryProvider;