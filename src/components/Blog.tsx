// Blog.js
import { useState } from "react";
import { myData3 } from "../data";
import Modal from "./Modal";

const Blog = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDivClick = (item: any) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div id="blog">
      <h1 className="title">ARTICLES</h1>
      <div className="proButton">
      </div>
      <div style={{ display: "block" }}>
        <div className="ProGrid">
          {myData3.map((item) => (
            <div key={item.id} onClick={() => handleDivClick(item)}>
              <img src={item.image} alt="" />
              <p>{item.title}</p>
              <div className="hide">
                <p>{item.title}</p>
                <p>{item.para}</p>
                <p>Tap to view details</p>
              </div>
              <button className="see" onClick={() => handleDivClick(item)}>
                see more
              </button>
            </div>
          ))}
        </div>
      </div>

      {modalVisible && (
        <Modal
          closeModal={closeModal}
          selectedItem={selectedItem}
          myData={myData3} // Use myData3 for the "Articles" section
        />
      )}
    </div>
  );
};

export default Blog;
