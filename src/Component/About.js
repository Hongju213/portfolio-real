import React, { useState } from "react";
import "../css/about.css";
import "../css/Tablet/tablet_about.css";
import "../css/Moblie/moblie_about.css";

const About = () => {
  const [img, setImg] = useState(
    "https://user-images.githubusercontent.com/54468963/114711905-76ca5d80-9d6a-11eb-85ec-1f1f8c2f03c6.png"
  );
  const [blog, setBlog] = useState(['https://www.instagram.com/jamesny807/', 'https://www.facebook.com/profile.php?id=100011171088691']);
  const [info, setInfo] = useState([
    {
      id: 1,
      text: "Yu Hyun Gim",
      flex: true
    },
    {
      id: 2,
      text: "A student running toward his dream"
    },
    {
      id: 3,
      text: "August 5th 2001"
    },
    {
      id: 4,
      text: "Korean"
    },
    {
      id: 5,
      text:
        " 저는 이러한 사람이 되고 싶습니다. 어떻게 하면 상대방을 배려할지 \
      어떻게 하면 내가 속한 집단에 도움을 가져다 줄수 있을지, 어떻게 하면 \
      최고가 될지 끝 없이 생각하는 사람이 되고 싶습니다.\
      덧붙여 제가 하고자 하는 일이 정말 너무나 재미있습니다. 내가 가고자 하는 길에는 \
      너무나도 많은 시행착오가 있겠지만 모르는 것이 있다면 끝까지 학습하는 자세를 가지겠습니다. 최선을 다 하겠습니다."
    }
  ]);

  return (
    <div className="about">
      <div className="about__container">
        <div className="about__title">About</div>
        <div className="about__info info">
          <div className="info__avatar">
            <img src={img} alt="avatar" />
          </div>
          <div className="info__info">
            <ul className="info__list">
              {info.map(value => {
                return value.flex ? (
                  <li
                    className={`info__list--${value.id} info--list`}
                    key={value.id}
                  >
                    <span>{value.text}</span> 
                    <div>
                        <div className="github">
                            <a href={blog[0]} target="_blank">
                                <div className="github__mark"></div>
                                </a>
                        </div>
                        <div className="blog">
                            <a href={blog[1]} target="_blank">
                                <div className="blog__mark"></div>
                                </a>
                        </div>
                    </div>
                  </li>
                ) : (
                  <li
                    className={`info__list--${value.id} info--list`}
                    key={value.id}
                  >
                    {value.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;