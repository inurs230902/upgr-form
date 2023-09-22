import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { styled } from "styled-components";
import { db } from "../firebase";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  border: 2px solid white;
  border-radius: 10px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #1d9bf0;
  }
  &[type="submit"] {
    cursor: pointer;
    border: none;
    &:hover {
      opacity: 0.8;
    }
    background-color: #1d9bf0;
    color: white;
  }
`;

const Error = styled.div`
  margin-top: 1vh;
  font-size: 18px;
  font-weight: 600;
  color: tomato;
  text-align: center;
`;

export default function UPGRForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "name") {
      setName(value);
    } else if (name === "first") {
      setFirst(value);
    } else if (name === "last") {
      setLast(value);
    } else if (name === "address") {
      setAddress(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      setLoading(true);
      await addDoc(collection(db, "upgr-form"), {
        name,
        address,
        first,
        last,
        createAt: Date.now(),
      });
      alert("저장되었습니다.");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
      setName("");
      setAddress("");
      setFirst("");
      setLast("");
    }
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input
          name="name"
          onChange={onChange}
          type="text"
          value={name}
          placeholder="이름"
          required
        />
        <InputWrapper>
          <Input
            name="first"
            onChange={onChange}
            type="text"
            value={first}
            placeholder="주민등록번호 앞자리"
            required
          />
          -
          <Input
            name="last"
            onChange={onChange}
            type="text"
            value={last}
            placeholder="주민등록번호 뒷자리"
            required
          />
        </InputWrapper>
        <Input
          name="address"
          onChange={onChange}
          type="address"
          value={address}
          placeholder="주소 - 동까지"
          required
        />
        <Input type="submit" value={isLoading ? "저장 중" : "제출하기"} />
      </Form>
      <Error>{error}</Error>
    </>
  );
}
