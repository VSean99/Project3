import React from "react";

const ProductsStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Products statistics</h5>
          <iframe style={{
            background:"#FFFFFF",
            border:"none",
            borderRadius:"2px",
            boxShadow:"0 2px 10px 0 rgba(70, 76, 79, .2)",
            width:"640",
            height:"480"
          }}
          src="https://charts.mongodb.com/charts-project-3-stgnv/embed/charts?id=62d28864-f1eb-4f19-8fb2-568118e59cf0&maxDataAge=60&theme=light&autoRefresh=true"
          ></iframe>
          </article>
      </div>
    </div>
  );
};
export default ProductsStatistics;