// import React, {useState} from 'react';
import styled from "styled-components";
import ContentButton from "../../components/ContentButton";
import {useForm} from "react-hook-form";


const Content = (user) => {
  // 서버에서 제목, 내용, 날짜, ... 가져오기
  const MAX_TITLE_LENGTH = 20;
  const MAX_CONTENT_LENGTH = 140;
  return (
    <>
      <WritePostContainer>
        <TextBox>
          {/*<form onSubmit={() => handleSubmit(onSubmit)}>*/}
            <TitleBox>
              <TitlePart>
                <Title>제목 : 제목!</Title>
              </TitlePart>
              <TitleLength>( 7 / 20 )</TitleLength>
            </TitleBox>
            <ContentBox>
              <ContentArea>
                내용이 들어갑니다
              </ContentArea><ContentLength>( 9 / 140 )</ContentLength>
            </ContentBox>
            <BottomBox>
              { user === 'me' && <InfoBox>※ 작성된 게시글은 수정이 불가합니다.</InfoBox> }
                <ButtonBox>
                  { user === 'me' && <ContentButton type='true'>삭제하기</ContentButton> }
                </ButtonBox>
            </BottomBox>
          {/*</form>*/}
        </TextBox>
      </WritePostContainer>
    </>
  );
};

export default Content;

// **주석 나중에 필요없는 거 지우기!**
const WritePostContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
`
const TextBox = styled.div`
  width: 794px;
  height: 1092px;
`

const TitleBox = styled.div`
  display: flex;
  //justify-content: space-between;
  //flex-wrap: nowrap;
  height: 134px;
  border-radius: 25px;
  border: 2px solid ${({theme}) => theme.colors.GRAY};
  margin-top: 58px;
  padding: 55px 0 55px 35px;
`

const TitlePart = styled.div`
  display: flex;
  width: 631px;
  height: 24px;
`

const Title = styled.h3`
  height: 24px;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
`

const TitleInput = styled.input`
  border: none;
  height: 24px;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  padding-right: 19px;
`

const TitleLength = styled.div`
  float: right; // 오른쪽에 정렬
  // float 속성 대체해야함
  color: ${({theme}) => theme.colors.GRAY};
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  height: 24px;
  background-color: white;
  margin-right: 35px;
`

const ContentBox = styled.div`
  height: 733px;
  border-radius: 25px;
  border: 2px solid ${({theme}) => theme.colors.GRAY};
  margin-top: 16px;
  padding: 35px;
  color: ${({theme}) => theme.colors.GRAY};
`

const ContentArea = styled.div` // 작성페이지에서는 textarea
  width: 714px;
  height: 627px;
  border: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: black;
`

const ContentLength = styled.div`
  float: right;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: ${({theme}) => theme.colors.GRAY};
  margin-bottom: 53px;
  margin-right: 10px; //ContentBox padding 값이랑 더해서 총 45px
`

const BottomBox = styled.div`
  width: 794px;
  height: 151px;
  padding: 16px 35px 16px 35px;
  margin-top: 16px;
`

const InfoBox = styled.div`
  width: 726px;
  color: ${({theme}) => theme.colors.GRAY};
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`

const ButtonBox = styled.div`
  width: 233px;
  height: 70px;
  background: white;
  float: right;
  margin-top: 17px;
`