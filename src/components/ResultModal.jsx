
import {useImperativeHandle , useRef } from "react";
export default function ResultModal({ref,targetTime, result}) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open(){
                dialog.current.showModal();
            }
        };

    });


    return <dialog ref={dialog} className="result-modal">
        <h2>Your {result}</h2>
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>X seconds left.</strong></p>
        <form method="dialog">
            <button>Close</button>

        </form>
    </dialog>;
}