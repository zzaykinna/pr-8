import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Flickity from "react-flickity-component";
import "../flickity.css";
import microfon from "../img/micro.jpg";
import usilok from "../img/usilok.jpg";
import electroguetar from "../img/guga.png";

const flickityOptions = {
  initialIndex: 2
};

const slider_img = {
  id: [1, 2, 3],
  title: ['Микрофоны', 'Усилители', 'Электрогитары'],
  image: [microfon, usilok, electroguetar]
};

export default function Shop() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">
        <div className='presentation'>
          <div className='present-text'>
            <h1 style={{ fontSize: '9vw' }}>Играй в своё удовольствие</h1>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">
        <Flickity className="slider" elementType="div" disableImagesLoaded={false} options={flickityOptions} reloadOnUpdate static={true}>
          {slider_img['id'].map((index) => {
            return (
              <div key={index} className="Plate">
                <>
                  <h2>{slider_img['title'][index - 1]}</h2>
                  <div style={{
                    backgroundImage: `url(${slider_img['image'][index - 1]})`,
                    width: '100%',
                    height: 600,
                    backgroundSize: 'cover'
                  }}></div>
                </>
              </div>
            );
          })}
        </Flickity>
      </div>
      <div className='info' style={{ background: '#102804' }}>
        <div className='info-conteiner'>
          <div style={{ marginRight: '10vw' }}>
            <h3>Адрес:</h3>
            <h4>г. Владимир, Большая Московская, д. 90А</h4>
            <h2>Режим работы:</h2>
            <p>понедельник — суббота 10:00 - 20:00 <br></br>воскресенье 10:00 - 18:00</p>

            <h2>Контакты:</h2>
            <p>8 915 537-78-23<br></br>
              8 930 657-45-34<br></br>
              8 904 406-32-78</p>
          </div>
          
          <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2223.3972425608354!2d40.4142280910017!3d56.13294290419597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414c7bcfaae38773%3A0x1761f18039f8986c!2z0YPQuy4g0JHQvtC70YzRiNCw0Y8g0JzQvtGB0LrQvtCy0YHQutCw0Y8g0YPQuy4sIDkw0JAsINCS0LvQsNC00LjQvNC40YAsINCS0LvQsNC00LjQvNC40YDRgdC60LDRjyDQvtCx0LsuLCA2MDAwMDA!5e0!3m2!1sru!2sru!4v1714024831830!5m2!1sru!2sru" width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>

    </>

  );
}