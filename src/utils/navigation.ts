import { useNavigate } from "react-router-dom";

export const useAppNavigation = () => {
    const navigate = useNavigate();

    const handleCreateSessionNav = () => {
        navigate('/session-creation');
    }

    return{
        handleCreateSessionNav,
    };
};
