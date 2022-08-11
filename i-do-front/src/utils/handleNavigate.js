export default function handleNavigate(setActive, navigate, path){  
    if(setActive){
        setActive(true);
    }

    navigate(path);
}