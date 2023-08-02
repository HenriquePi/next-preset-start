"use client"
import { useRef, useEffect } from 'react';
import React, { Component } from 'react';


import { Carousel } from 'react-responsive-carousel';
import { ProjectCard } from './ProjectCard';


import LinkIcon from "@/assets/icons/up-right-from-square-solid.svg";
import VoxelDigitalTile from "@/assets/VoxelDigitalTile.webp";
import UnlystTile from "@/assets/UnlystTile.webp";

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Image from 'next/image';

export const ProjectSwiper = () => {



  return (
    <Carousel>
      <a href="https://www.voxeldigital.ca/" target="_blank" rel="noreferrer">
        <Image src={VoxelDigitalTile} alt="Voxel Digital Website" />
        <div className="legend">
        <h3>Voxel Digital</h3>
        <Image src={LinkIcon} alt="Link Icon" height={35} width={35}/>
      </div>
      </a>
      <a href="https://www.unlyst.com/" target="_blank" rel="noreferrer">
      <Image src={UnlystTile} alt="Unlyst Website" />
      <div className="legend">
        <h3>Unlyst</h3>
        <Image src={LinkIcon} alt="Link Icon" height={35} width={35}/>
      </div>
      </a>
    </Carousel>
  );
}
