import styled from "@emotion/styled";

export const ContainerFilter = styled.div`
  font-family: "Roboto";
  font-style: normal;

  width: 288px;
  padding: 23px;
   margin-top: 10px;

  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: 6px;
`;
export const TitleFilter = styled.h1`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.16;

  letter-spacing: 0.01em;
`;

export const Labe = styled.label`
  display: flex;
  flex-direction: column;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  /* identical to box height */

  margin-top: 10px;

  color: #7f8e9d;
`;

export const Input = styled.input`
  width: 256px;
  height: 20px;

  background: #f4f4f4;
  border: 1px solid #c5c5c5;
  border-radius: 6px;
  margin-top: 8px;
  padding: 10px 15px;

  color: #a8a8a8;
  :focus {
    border: 1px solid #4cc6f5;
  }
`;