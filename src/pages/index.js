import React from 'react';

import Layout from '../components/layouts';
import Meta from '../components/meta';

const IndexPage = () => {
  return (
    <Layout>
      <Meta title="Home" />
      <section id="sorbent">
        <div className="pt-20 pb-10">
          <div
            className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
            data-aos="fade-down"
          >
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="my-4 text-5xl font-bold leading-tight">
                Altaysorbent - здоровья важный элемент!
              </h1>
              <p className="leading-normal text-2xl mb-8">
                100% натуральный кремнесодержащий энтеросорбент с широким
                спектром действия, изготавливается из природного минерала
                монтмориллонита
              </p>
            </div>
            <div className="w-full md:w-1/2 py-6 flex justify-end">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/vYluBzK-ddI"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <svg
            viewBox="0 0 1428 174"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(-2.000000, 44.000000)"
                fill="#FFFFFF"
                fillRule="nonzero"
              >
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                />
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                />
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  id="Path-4"
                  opacity="0.200000003"
                />
              </g>
              <g
                transform="translate(-4.000000, 76.000000)"
                fill="#FFFFFF"
                fillRule="nonzero"
              >
                <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z" />
              </g>
            </g>
          </svg>
        </div>
      </section>
      <section className="bg-white border-b py-8" id="specification">
        <div className="container mx-auto">
          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/3 p-6 align-middle">
              <img
                src="https://i.ibb.co/ZT9qg91/newl.png"
                className="mx-auto"
                style={{
                  height: '300px',
                  width: 'auto',
                }}
                data-aos="fade-up"
                alt=""
              />
            </div>
            <div className="w-full sm:w-2/3 p-6">
              <div className="align-middle mt-24">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Новое Оформление
                </h3>
                <p className="text-gray-700 text-xl mb-2 lg:mb-8 text-black text-justify">
                  Мы рады представить «Алтайсорбент» с обновленным дизайном.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full sm:w-2/3 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Алтайсорбент – натуральный сорбент
              </h3>
              <p className="text-gray-700 text-xl mb-8 text-justify">
                Алтайсорбент – натуральный сорбент из элитных бентонитовых глин
                (содержание минерала монтмориллонита не менее 95 - 98%). В
                процессе производства бентонитовые глины обрабатываются по
                специально разработанной и запатентованной технологии, что
                позволяет максимально сохранить их природные свойства. Не
                используются какие-либо добавки, ароматизаторы, красители и
                консерванты...
              </p>
            </div>
            <div className="w-full sm:w-1/3 p-6 flex justify-center">
              <img
                src="https://i.ibb.co/WP0mWR3/naturs.png"
                className="mx-auto"
                style={{
                  height: '300px',
                  width: 'auto',
                }}
                data-aos="fade-up"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/3 p-6 align-middle">
              <img
                src="https://i.ibb.co/F7c5tFj/glina.png"
                className="mx-auto"
                style={{
                  height: '300px',
                  width: 'auto',
                }}
                data-aos="fade-up"
                alt=""
              />
            </div>
            <div className="w-full sm:w-2/3 p-6 ">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Идеальный Сорбент
                </h3>
                <p className="text-gray-700 text-xl mb-2 lg:mb-8 text-black text-justify">
                  «Алтайсорбент» не только очищает организм, но и регулирует
                  баланс макро и микроэлементов.
                  <br />
                  Сорбент избирательно работает при употреблении внутрь. Он
                  обволакивает слизистую оболочку желудка и активно выводит
                  патогенные микроорганизмы, токсины, соли тяжелых металлов,
                  радионуклиды, аллергены и другие раздражители.
                  <br />
                  При этом не поглощает белки, ферменты, витамины. Не страдает и
                  полезная микрофлора кишечника, более того, сорбент
                  способствует ее росту.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="use" className="bg-white border-b py-8">
        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3 text-center">
          Применение
        </h3>
        <div className="container mx-auto px-2 pt-4 text-gray-700 text-xl text-justify">
          <p>
            «Алтайсорбент» применяют как эффективное профилактическое и
            вспомогательное средство при лечении заболеваний, сопровождающихся
            интоксикацией, в частности:
          </p>
          <ul className="list-disc lg:ml-10">
            <li>
              выведении из организма солей тяжелых металлов и радионуклидов,
            </li>
            <li>пищевых, химических, медикаментозных отравлениях,</li>
            <li>смягчении побочных эффектов лучевой и химиотерапии,</li>
            <li>снятии алкогольной интоксикации (похмелье)</li>
            <li>
              заболеваниях желудочно- кишечного такта (гастрит, язвенная болезнь
              желудка, дисбактериоз и др)
            </li>
            <li>
              метеоризме (вздутие живота), диспепсических недугах (рвота,
              изжога, отрыжка),
            </li>
            <li>
              аллергических заболеваниях (поллиноз, пищевая и лекарственная
              аллергии),
            </li>
            <li>артериосклерозах,</li>
            <li>заболеваниях кожного покрова (экзема, псориаз),</li>
            <li>нарушении обмена веществ, в том числе ожирении,</li>
            <li>токсикозе беременных,</li>
            <li>пародонтозе,</li>
            <li>лечении кожных опрелостей, пролежней, ран, ожогов и др.</li>
          </ul>
          <p>
            «Алтайорбент» зарегистрирован как биологически активная добавка. Не
            является лекарственным средством.
          </p>
        </div>
      </section>
      <section className="bg-white border-b py-8" id="certificates">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <div className="w-full md:w-1/2 p-6 flex flex-col ">
            <div className="shadow py-4">
              <h4 className="font-bold text-xl text-gray-800 px-6 text-center">
                Алтайсорбент №20
              </h4>
              <img
                className="block mx-auto my-2"
                src="https://i.ibb.co/B3LLKmh/sorbent.png"
                style={{
                  height: '170px',
                }}
                alt=""
              />
              <p className="w-full text-gray-700 px-6 text-center">
                Спрашивайте в аптеках вашего города
              </p>
              <div className="flex items-center justify-center">
                <a
                  href="https://docdro.id/GkZ2GF8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mx-auto lg:mx-0 underline text-green-700 font-bold cursor-pointer"
                >
                  Инструкция по применению
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-6 flex flex-col ">
            <div className="shadow py-4">
              <h4 className="w-full font-bold text-xl text-gray-800 px-6 text-center">
                Сертификаты
              </h4>
              <p className="text-gray-700 text-base px-6 mb-2 text-justify">
                Наши продукты соответствуют высоким стандартам. Ниже приведены
                документы для ознакомления с нашей компанией и продукцией
              </p>
              <div className="flex items-center justify-center">
                <div className="w-1/4 px-3">
                  <a
                    className="cursor-pointer"
                    href="https://i.ibb.co/gRw2NqW/eas.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="Свидетельство о регистрации"
                      src="https://i.ibb.co/gRw2NqW/eas.jpg"
                    />
                  </a>
                </div>

                <div className="w-1/4 px-3">
                  <a
                    className="cursor-pointer"
                    href="https://i.ibb.co/CwWt2NN/222.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="Протокол испытаний"
                      src="https://i.ibb.co/CwWt2NN/222.jpg"
                    />
                  </a>
                </div>
                <div className="w-1/4 px-3">
                  <a
                    className="cursor-pointer"
                    href="https://i.ibb.co/kxzLqRH/33.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="Протокол испытаний"
                      src="https://i.ibb.co/kxzLqRH/33.jpg"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="container flex flex-wrap mx-auto px-2 pt-4 text-gray-700">
          <div className="w-2/3">
            <h3 className="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-700">
              А знаете ли Вы?
            </h3>
            <p className="text-xl text-gray-700 leading-none mb-3 text-justify">
              Бентонитовые глины для сырья добывают на динозавровом
              месторождении в Восточно-Казахстанской Области. Своё название
              месторождение получило в связи с находкой большого количества
              остатков динозавровых яиц
            </p>
          </div>
          <div className="w-1/3 flex justify-center">
            <img
              src="https://image.flaticon.com/icons/png/512/145/145302.png"
              style={{
                height: '200px',
                width: '150px',
              }}
              alt=""
            />
          </div>
        </div>
      </section>
      <a id="contacts" />

      <svg
        className="wave-top"
        viewBox="0 0 1439 147"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
            <g className="wave" fill="#f8fafc">
              <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z" />
            </g>
            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
              <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                />
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                />
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  opacity="0.200000003"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>

      <section className="py-6 mb-12">
        <div
          className="relative w-full h-full"
          style={{
            height: '400px',
            width: '100%',
          }}
        >
          <div
            id="map"
            style={{
              height: '100%',
              width: '400px',
            }}
          />
          <div className="flex flex-col justify-center shadow inset-y-0 left-0 bg-white absolute py-6 px-4 lg:py-12 lg:px-8 text-black my-28 lg:my-24 ml-4 lg:ml-32">
            <img
              className="mx-auto mb-2"
              src="/images/logo_black.png"
              style={{
                height: '75px',
              }}
              alt=""
            />
            <h4 className="font-bold">ТОО "Арника"</h4>
            <p>
              <i className="fas fa-map-marked-alt mr-2" /> Ауэзова 14/1 офис 308
            </p>
            <p>
              <i className="fas fa-phone-volume mr-2" />{' '}
              <a className="" href="tel:+77779898998">
                +7 (777) 989-89-98
              </a>
            </p>
            <p>
              <i className="fas fa-envelope mr-2" />{' '}
              <a href="mailto:sales@altaysorbent.org">sales@altaysorbent.org</a>
            </p>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="w-full pt-6 text-center">
            <p className="text-white">
              ТОО "АРНИКА" © 1994 - 2019
              <br />
              Республика Казахстан, г. Усть-Каменогорск
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
