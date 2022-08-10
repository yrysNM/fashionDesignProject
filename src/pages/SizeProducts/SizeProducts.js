import { Link, useNavigate } from "react-router-dom";
import "./sizeProducts.scss";

const SizeProducts = () => {

    let navigate = useNavigate();

    return (
        <section className="size">
            <div className="container">
                <div className="productMap_subtitle">
                    <div style={{ width: 43 }} onClick={() => navigate(-1)}>

                        <div className="circleBack">
                            <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.646446 3.64645C0.451185 3.84171 0.451185 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM18 3.5L1 3.5L1 4.5L18 4.5L18 3.5Z" fill="#FFFDF5" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="size-blocks">

                    <div className="size-title">
                        <h2 className="size-title_text">Таблица для определения женских размеров</h2>
                    </div>

                    <div className="size-table">
                        <table className="table">
                            <thead className="thead">

                                <tr className="tr">
                                    <th>Размер</th>
                                    <th>Обхват груди</th>
                                    <th>Обхват талии</th>
                                    <th>Обхват бёдер</th>
                                </tr>
                            </thead>
                            <tbody className="tbody">
                                <tr className="tr">
                                    <td>40</td>
                                    <td>78-81</td>
                                    <td>63-65</td>
                                    <td>88-91</td>
                                </tr>
                                <tr className="tr">
                                    <td>42</td>
                                    <td>82-85</td>
                                    <td>66-69</td>
                                    <td>92-95</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="size-blocks">

                    <div className="size-title">
                        <h2 className="size-title_text">Таблица для определения мужских размеров</h2>
                    </div>

                    <div className="size-table">
                        <table className="table">
                            <thead className="thead">

                                <tr className="tr">
                                    <th>Размер</th>
                                    <th>Обхват груди</th>
                                    <th>Обхват талии</th>
                                    <th>Обхват бёдер</th>
                                </tr>
                            </thead>
                            <tbody className="tbody">
                                <tr className="tr">
                                    <td>40</td>
                                    <td>78-81</td>
                                    <td>63-65</td>
                                    <td>88-91</td>
                                </tr>
                                <tr className="tr">
                                    <td>42</td>
                                    <td>82-85</td>
                                    <td>66-69</td>
                                    <td>92-95</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    <div className="size-descr">
                        Все модели, предоставленные на страницах чаще соответсвуют размерам
                        <br />
                        <br />
                        т.к. замеров для каждой модели у нас нет, мы предоставляем размерную таблицу поставщика,
                        но по ней могут быть минимальные расхождени, она не 100% идёт под модель
                        <br />
                        <br />
                        Маркировка S, M, L, XL у каждого поставщика своя, у кого-то 42-S, у кого-то 42-M


                    </div>
                </div>
            </div>
            <div className="rightCircle top255">
                <div className="rightCircle_circle w429"></div>
            </div>
        </section>
    );
}

export default SizeProducts; 
