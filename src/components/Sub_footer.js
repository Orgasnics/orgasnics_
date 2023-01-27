import React from "react";

const Sub_footer = () => {
  return (
    <>
      <div class="sub-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <p>
                Copyright &copy; {new Date().getFullYear()} Ever Green - Design
                by :{" "}
                <a
                  rel="nofollow noopener"
                  href="https://EverGreen.com/"
                  target="_blank"
                >
                  Ever Green
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sub_footer;
