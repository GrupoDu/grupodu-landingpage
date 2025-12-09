import { useState } from "react"

export const useHandleOpenFilterMobile = () => {
    const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);

    function openFilterMobile() {
        setFilterIsOpen(true);
    }

    function closeFilterMobile() {
        setFilterIsOpen(false);
    }


    return {
        filterIsOpen,
        openFilterMobile,
        closeFilterMobile
    }
}