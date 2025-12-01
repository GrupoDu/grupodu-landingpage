import toast from "react-hot-toast"

export const useToast = ({ toastType, message } : { toastType: "success" | "error", message: string}) => {
    return toast[toastType](message);
}