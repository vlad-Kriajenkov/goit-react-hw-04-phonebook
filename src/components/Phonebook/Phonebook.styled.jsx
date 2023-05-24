import styled from "@emotion/styled";

export const ContainerPhoneBook = styled.div`
  font-family: "Roboto";
  font-style: normal;

  width: 288px;
  padding: 23px;

  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: 6px;
`;
export const TitlePhoneBook = styled.h1`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.16;

  letter-spacing: 0.01em;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
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

export const Button = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;

  letter-spacing: 0.03em;

  height: 40px;
  margin-top: 20px;

  color: #ffffff;

  background: #4cc6f5;
  box-shadow: 2px 2px 4px rgba(126, 147, 255, 0.2);
  border: none;
  border-radius: 6px;
  :hover {
    background: #29abdd;
  }
`;
