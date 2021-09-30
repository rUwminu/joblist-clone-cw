import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const CheckboxAnima = () => {
  return (
    <Container>
      <label className="radio-container">
        <input type="radio" name="yesNo" />
        <span className="check"></span>
        Yes
      </label>
      <label className="radio-container">
        <input type="radio" name="yesNo" />
        <span className="cross"></span>
        No
      </label>
    </Container>
  );
};

const Container = styled.section`
  ${tw`
    h-screen
    w-screen
    flex
    flex-col
    items-center
    justify-center
    bg-gray-900
  `}

  .radio-container {
    ${tw`
        flex
        items-center
        justify-center

        mb-4
        text-2xl
        text-white
        font-semibold
    `}

    input {
      appearance: none;
    }

    span {
      ${tw`
        relative
        inline-block
        w-[30px]
        h-[30px]
        mr-4
        bg-gray-900
        transition
        duration-500
        ease-in-out
      `}

      :before {
        content: "";
        box-shadow: 0 -27px 0 rgba(249, 250, 251, 1);

        ${tw`
            absolute
            bottom-0
            left-0
            w-full
            h-[3px]
            bg-gray-100
            transition
            duration-500
        `}
      }

      :after {
        content: "";
        box-shadow: 27px 0 0 rgba(249, 250, 251, 1);

        ${tw`
            absolute
            bottom-0
            left-0
            w-[3px]
            h-full
            bg-gray-100
            transition
            duration-500
        `}
      }
    }

    input:checked ~ .check::before {
      ${tw`
        bg-green-500
      `}
      box-shadow: 0 0 0 transparent;
    }

    input:checked ~ .check::after {
      ${tw`
        h-1/2
        bg-green-500
      `}
      box-shadow: 0 0 0 transparent;
    }

    input:checked ~ .check {
      transform: rotate(-45deg) translate(6px, -10px);
    }

    input:checked ~ .cross::before {
      ${tw`
        bg-red-500
      `}
      transform: rotate(-45deg) translate(10px, -11px);
      box-shadow: 0 0 0 transparent;
    }

    input:checked ~ .cross::after {
      ${tw`
        bg-red-500
      `}
      transform: rotate(-45deg) translate(10px, 8px);
      box-shadow: 0 0 0 transparent;
    }
  }
`;

export default CheckboxAnima;
