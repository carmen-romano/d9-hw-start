import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Job = ({ data }) => {
  // const [selected, isSelected] = useState([]);
  const preferiti = useSelector(state => state.favouriteCompany.content);
  const dispatch = useDispatch();
  const isFavorite = preferiti.includes(data.company_name);
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={1} className="d-flex align-items-center">
        <FaStar
          className={` ${isFavorite ? "stars-selected" : "stars"}`}
          onClick={() =>
            dispatch({
              type: "ADD_FAVOURITE_COMPANY",
              payload: data.company_name,
            })
          }
        />
      </Col>
      <Col xs={3} className="d-flex align-items-center">
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
