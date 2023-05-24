import {
  ContainerFilter,
  TitleFilter,
  Labe,
  Input,
} from "./Filter.styled";

const Filter = ({ value, onChange }) => (
  <ContainerFilter>
    <TitleFilter>Contacts</TitleFilter>
    <Labe>
      Find contacts by name
      <Input
        type="text"
        placeholder="Enter name"
        value={value}
        onChange={onChange}
      />
    </Labe>
  </ContainerFilter>
);
export default Filter;
