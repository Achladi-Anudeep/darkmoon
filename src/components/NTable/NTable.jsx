import React from "react";
import "./NTable.css";
import { FiCheck } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const NTable = () => {
  return (
    <div className="table-holder">
      <table>
        <tbody data-aos="fade-right">
          <tr className="table-head">
            <th></th>
            <th>Our Drink</th>
            <th>Missouts</th>
          </tr>

          <tr>
            <th className="table-subhead">Iron</th>
            <td className="tick">
              <FiCheck />
            </td>
            <td className="wrong">
              <RxCross1 />
            </td>
          </tr>
          <tr>
            <th className="table-subhead">Zinc</th>
            <td className="tick">
              <FiCheck />
            </td>
            <td className="wrong">
              <RxCross1 />
            </td>
          </tr>
          <tr>
            <th className="table-subhead">Calcium</th>
            <td className="tick">
              <FiCheck />
            </td>
            <td className="wrong">
              <RxCross1 />
            </td>
          </tr>
          <tr>
            <th className="table-subhead">Potassium</th>
            <td className="tick">
              <FiCheck />
            </td>
            <td className="wrong">
              <RxCross1 />
            </td>
          </tr>
          <tr>
            <th className="table-subhead">PolyPhenols</th>
            <td className="tick">
              <FiCheck />
            </td>
            <td className="wrong">
              <RxCross1 />
            </td>
          </tr>
          <tr>
            <th className="table-subhead">Acidity Regulators</th>
            <td className="wrong">
              <RxCross1 />
            </td>
            <td className="tick">
              <FiCheck />
            </td>
          </tr>

          <tr>
            <th className="table-subhead">Artificial Sweetners</th>
            <td className="wrong">
              <RxCross1 />
            </td>
            <td className="tick">
              <FiCheck />
            </td>
          </tr>
          <tr>
            <th className="table-subhead">Pure Organic</th>
            <td className="tick">
              <FiCheck />
            </td>
            <td className="wrong">
              <RxCross1 />
            </td>
          </tr>
          <tr>
            <th className="table-subhead">Natural Colors</th>
            <td className="wrong">
              <RxCross1 />
            </td>
            <td className="tick">
              <FiCheck />
            </td>
          </tr>
        </tbody>
      </table>
      <table className="second-table">
        <tbody data-aos="fade-left">
          <tr className="table-head second-table-head">
            <th></th>
            <th>Our Drink</th>
            <th>Missouts</th>
          </tr>
          <tr>
            <th className="table-subhead">Anti Oxidants</th>
            <td className="tick">
              <FiCheck />
            </td>
            <td className="wrong">
              <RxCross1 />
            </td>
          </tr>
          <tr>
            <th className="table-subhead">Preservatives</th>
            <td className="wrong">
              <RxCross1 />
            </td>
            <td className="tick">
              <FiCheck />
            </td>
          </tr>
          <tr>
            <th className="table-subhead">Magnesium</th>
            <td className="tick">
              <FiCheck />
            </td>
            <td className="wrong">
              <RxCross1 />
            </td>
          </tr>
          <tr>
            <th className="table-subhead">Copper</th>
            <td className="tick">
              <FiCheck />
            </td>
            <td className="wrong">
              <RxCross1 />
            </td>
          </tr>
          <tr>
            <th className="table-subhead">Vitamin B1,B2,B3,B6,B9,K,E</th>
            <td className="tick">
              <FiCheck />
            </td>
            <td className="wrong">
              <RxCross1 />
            </td>
          </tr>
          <tr>
            <th className="table-subhead">Energy</th>
            <td className="tick">
              <h5>High</h5>
            </td>
            <td className="wrong">
              <h5>Moderate</h5>
            </td>
          </tr>
          <tr>
            <th className="table-subhead">Flavanoids</th>
            <td className="tick">
              <FiCheck />
            </td>
            <td className="wrong">
              <RxCross1 />
            </td>
          </tr>
          <tr>
            <th className="table-subhead">Vitamin C</th>
            <td className="tick">
              <FiCheck />
            </td>
            <td className="wrong">
              <RxCross1 />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NTable;
