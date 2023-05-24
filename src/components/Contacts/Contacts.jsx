import { AiOutlineDelete } from "react-icons/ai";
import {
  ContainerContact,
  TitileContact,
  ListContatct,
  ItemContatct,
  NameContatct,
  NumberContatct,
  Wrapper,
} from "./Contacts.styled";
const Contacts = ({ contacts, removeContact }) => {
  return (
    <ContainerContact>
      <TitileContact>Results:</TitileContact>
      <ListContatct>
        {contacts.map(({ id, name, number }) => {
          console.log(id);
          return (
            <ItemContatct key={id}>
              <Wrapper>
                <NameContatct>{name}:</NameContatct>
                <NumberContatct>{number}</NumberContatct>
              </Wrapper>

              <button type="button" onClick={() => removeContact(id)}>
                <AiOutlineDelete />
              </button>
            </ItemContatct>
          );
        })}
      </ListContatct>
    </ContainerContact>
  );
};
export default Contacts;
