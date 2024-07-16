"use client"
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCircle } from "react-icons/fa";

const OurSectionsVerticalBar = () => {
  return (
    <div className='h-full '>
        <VerticalTimeline
        layout="1-column-left">
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ color: 'rgb(48, 49, 49)' }}
                // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaCircle />}
                visible={true}
            >
                <h3 className="vertical-timeline-element-title font-bold text-xl 2xl:text-2xl">Corporate Strategy & Planning Unit</h3>
                <h4 className="mt-2 text-gray-700 2xl:text-xl">Economic & Financial Analysis, Strategy & Planning, Market & Policy Research.</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ color: 'rgb(48, 49, 49)' }}
                // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaCircle />}
                visible={true}
            >
                <h3 className="vertical-timeline-element-title font-bold text-xl 2xl:text-2xl">Performance Monitoring & Evaluation</h3>
                <h4 className="mt-2 2xl:text-xl">Determining appropriateness and fit between Strategy and delivery of Performance across the value chain of VRA’s Operations and Business. Read More... </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ color: 'rgb(48, 49, 49)' }}
                // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                // iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaCircle />}
                visible={true}
            >
                <h3 className="vertical-timeline-element-title font-bold text-xl ">Risk Management & Compliance Unit</h3>
                <h4 className="mt-2 2xl:text-xl">Promotes Enterprise Risk Management (ERM) practices in the Authority, by providing objective assurance and advisory services.</h4>
            </VerticalTimelineElement>
            
            
        </VerticalTimeline>
    </div>
  )
}

export default OurSectionsVerticalBar