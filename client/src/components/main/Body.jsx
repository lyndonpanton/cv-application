import Input from "./input/Input.jsx";
import Result from "./result/Result.jsx";

import { useState } from "react";

function Body() {
    const [isInputVisible, setIsInputVisible] = useState(true);

    return (
        <main>
            <Input
                    isInputVisible={ isInputVisible }
                    setIsInputVisible={ setIsInputVisible } />
            <Result
                    isInputVisible={ isInputVisible }
                    setIsInputVisible={ setIsInputVisible } />
        </main>
    );
}

export default Body;
