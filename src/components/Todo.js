import Button from '@atlaskit/button';
import styled from 'styled-components';

const ButtonStyled = styled(Button)`
    margin-top: 5px;
    text-align: left;
`;


export default function Todo({todo}){
    
    return (
            <ButtonStyled shouldFitContainer> {todo.name}</ButtonStyled>                

    );
    
}
