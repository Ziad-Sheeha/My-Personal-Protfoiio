import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, preview, imgUrl }) => {
  return (
    <Col
      size={12}
      sm={6}
      md={4}
    >
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <a
            href={preview}
            className="project-link"
            target="_blank"
          >
            <h4>{title}</h4>
          </a>
        </div>
      </div>
    </Col>
  );
};
