import React from "react";
import "./Category.css"
import NewsCollection from "../components/NewsCollection";

const CategoryList = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
var country = "";

export default function Category() {
  return (
    // <div>hello</div>
    <>
      <ul className="nav nav-pills mb-3 category_bar" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="active category_item" id="pills-business-tab" data-bs-toggle="pill" data-bs-target="#pills-business" type="button" role="tab" aria-controls="pills-business" aria-selected="true">business</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="category_item" id="pills-entertainment-tab" data-bs-toggle="pill" data-bs-target="#pills-entertainment" type="button" role="tab" aria-controls="pills-entertainment" aria-selected="false">entertainment</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="category_item" id="pills-general-tab" data-bs-toggle="pill" data-bs-target="#pills-general" type="button" role="tab" aria-controls="pills-general" aria-selected="false">general</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="category_item" id="pills-health-tab" data-bs-toggle="pill" data-bs-target="#pills-health" type="button" role="tab" aria-controls="pills-health" aria-selected="false">health</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="category_item" id="pills-science-tab" data-bs-toggle="pill" data-bs-target="#pills-science" type="button" role="tab" aria-controls="pills-science" aria-selected="false">science</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="category_item" id="pills-sports-tab" data-bs-toggle="pill" data-bs-target="#pills-sports" type="button" role="tab" aria-controls="pills-sports" aria-selected="false">sports</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="category_item" id="pills-technology-tab" data-bs-toggle="pill" data-bs-target="#pills-technology" type="button" role="tab" aria-controls="pills-technology" aria-selected="false">technology</button>
        </li>

        {/* Country switch */}
        {/* <label className="switch">
          <input type="checkbox" onClick={()=>switchCountry()} id="setck"/>
          <span className="slider round"></span>
        </label> */}
         
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-business" role="tabpanel" aria-labelledby="pills-business-tab"><NewsCollection CATEGORY={CategoryList[0]} COUNTRY={country}/></div>
        <div className="tab-pane fade" id="pills-entertainment" role="tabpanel" aria-labelledby="pills-entertainment-tab"><NewsCollection CATEGORY={CategoryList[1]} COUNTRY={country}/></div>
        <div className="tab-pane fade" id="pills-general" role="tabpanel" aria-labelledby="pills-general-tab"><NewsCollection CATEGORY={CategoryList[2]} COUNTRY={country}/></div>
        <div className="tab-pane fade" id="pills-health" role="tabpanel" aria-labelledby="pills-health-tab"><NewsCollection CATEGORY={CategoryList[3]} COUNTRY={country}/></div>
        <div className="tab-pane fade" id="pills-science" role="tabpanel" aria-labelledby="pills-science-tab"><NewsCollection CATEGORY={CategoryList[4]} COUNTRY={country}/></div>
        <div className="tab-pane fade" id="pills-sports" role="tabpanel" aria-labelledby="pills-sports-tab"><NewsCollection CATEGORY={CategoryList[5]} COUNTRY={country}/></div>
        <div className="tab-pane fade" id="pills-technology" role="tabpanel" aria-labelledby="pills-technology-tab"><NewsCollection CATEGORY={CategoryList[6]} COUNTRY={country}/></div>
      </div>
    </>
  );
}

