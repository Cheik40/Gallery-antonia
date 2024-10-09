import { useRouteError } from "react-router-dom";
import {
    Paragraph,
    TitleH1,
} from "../../componants/textComponents/TextComponents";

function Error() {
    const error = useRouteError();
    console.error(error);
    return (
        <div>
            <TitleH1 text='Oops!' />
            <Paragraph text="Désolé, une erreur inattendue s'est produite." />
            <Paragraph text={<i>{error.statusText || error.message}</i>} />
        </div>
    );
}

export default Error;
