import React, { useState, useEffect } from "react";
import "./RevenueList.scss";
import db from "../../firebase";
import RevenueTable from "../../Components/RevenueTable/RevenueTable";
import { useDispatch } from "react-redux";
import { setRevenues } from "../../store/actions/revenueActions";
import Form from "../../Components/Forms/Form";
import { Button } from "@material-ui/core";
import TransitionsModal from "../../Modal/ModalTag";
const RevenueList = () => {
  const dispatch = useDispatch();
  const [revenueList, setRevenueList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const getDatabaseData = async () => {
    const collection = db.collection("revenues");
    const snapshot = await collection.get();
    const documents = [];
    snapshot.forEach((doc) => {
      const document = doc.data();
      document.id = doc.id;
      documents.push(document);
    });
    setRevenueList(documents);
    dispatch(setRevenues(documents));
    console.log("documents", documents);
  };

  useEffect(() => {
    getDatabaseData();
    // insertDocument();
  }, []);

  return (
    <div className="revenueList__container">
      <div className="revenueList__info">
        <Button
          onClick={() => setShowModal((prev) => !prev)}
          style={{ backgroundColor: "green", margin: "6px" }}
        >
          Add Data
        </Button>
        <div className="revenueList__disclaimer">Click on Rows to see their Revenue Trend</div>
      </div>
      <RevenueTable data={revenueList} />
      <TransitionsModal
        showModal={showModal}
        setShowModal={setShowModal}
        modalHeader=" Company's Revenue List"
      >
        <Form showModal={showModal} setShowModal={setShowModal} />
      </TransitionsModal>
    </div>
  );
};

export default RevenueList;
