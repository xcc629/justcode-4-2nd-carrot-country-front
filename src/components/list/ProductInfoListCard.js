import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SERVER_PORT } from 'config';
import styled from 'styled-components';

const ProductInfoListCard = ({ data, maxWidth }) => {
  const navigate = useNavigate();
  const {
    id,
    productImage,
    title,
    price,
    city,
    district,
    chatRoom,
    productIntrested,
  } = data;

  return (
    <CardWrapper
      maxWidth={maxWidth}
      onClick={() => {
        navigate(`/product/detail`, { state: { productId: id } });
      }}
    >
      <ListCardWrapper maxWidth={maxWidth}>
        <ImageWrapper>
          <ImageItself
            src={`${SERVER_PORT}/${productImage[0]?.imageUrl}`}
            alt="image"
          />
        </ImageWrapper>
        <LettersWrapper>
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>{price}</ProductPrice>
          <ProductDistrict>
            {city.cityName} {district.districtName}
          </ProductDistrict>
          <InterestedWrapped>
            <Interested>
              관심 {productIntrested.length} {'\u2022'}
            </Interested>

            <Chats> 채팅 {chatRoom.length}</Chats>
          </InterestedWrapped>
        </LettersWrapper>
      </ListCardWrapper>
    </CardWrapper>
  );
};

export default ProductInfoListCard;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
  height: auto;
  @media (max-width: 690px) {
    width: 40%;
    margin: 0 5%;
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
    width: 25%;
    margin: 0 2%;
  }
  // 모니터
  @media (min-width: 891px) {
    width: 20%;
    margin: 0 2%;
  }
`;

const ListCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex: none;
  width: 100%;
  object-fit: contain;
  aspect-ratio: 1/1;
`;

const ImageItself = styled.img`
  display: block;
  border-radius: 15px;
  border: 1px solid silver;
  width: 100%;
  aspect-ratio: 1/1;
`;
const LettersWrapper = styled.div``;

const ProductTitle = styled.p`
  @media (max-width: 690px) {
    font-size: 16px;
    margin: 10px 0;
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
    font-size: 17px;
    margin: 15px 0;
  }
  // 모니터
  @media (min-width: 891px) {
    font-size: 18px;
    margin: 17px 0;
  }
`;

const ProductPrice = styled.p`
  font-weight: bold;
  @media (max-width: 690px) {
    margin-bottom: 8px;
    font-size: 15px;
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
    margin-bottom: 9px;
  }
  // 모니터
  @media (min-width: 891px) {
    margin-bottom: 10px;
  }
`;

const ProductDistrict = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  @media (max-width: 690px) {
    font-size: 12px;
    margin-bottom: 8px;
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
    margin-bottom: 9px;
  }
  // 모니터
  @media (min-width: 891px) {
    margin-bottom: 10px;
  }
`;

const InterestedWrapped = styled.div`
  display: flex;
  color: #858e96;
  font-size: 13px;
`;

const Interested = styled.p``;

const Chats = styled.p``;
