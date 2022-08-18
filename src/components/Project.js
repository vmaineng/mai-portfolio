import React from "react";
import { Image } from "cloudinary-react";

function Project({ project }) {
  return (
    <div>
      Projects
      <h1>{project.name} </h1>
      <Image
        style={{ width: 200 }}
        cloudName="v1660780825"
        publicId="https://res.cloudinary.com/vmaineng/image/upload/v1660780825/tiny_m9ymqr.png"
      />
      {project.description}
      {project.created}
      {project.deployed}
    </div>
  );
}

export default Project;
