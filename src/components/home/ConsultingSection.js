import React from "react"

import Section, { PrevSection, SectionLeft, SectionRight } from "./Section"

function TuxFigure(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 325" {...props}>
      <g fill="none" fillRule="evenodd" stroke="#000">
        <g strokeWidth={8} transform="translate(18.401 4)">
          <circle cx={52} cy={52} r={52} />
          <path
            strokeLinecap="round"
            d="M90.707 40.662C84.302 26.094 75.96 17.753 65.684 15.639"
          />
        </g>
        <path
          strokeLinecap="round"
          strokeWidth={8}
          d="M70.901 108v165M70.401 273c-21.635 3.022-34.598 18.689-38.889 47m0-.391h-10.11M72.707 273c21.43 3.032 34.27 18.75 38.519 47.154m0 0H121.4"
        />
        <g strokeLinecap="round">
          <path
            strokeWidth={8}
            d="M66.34 166.597c-32.535 6.817-48.394 22.719-47.576 47.705"
          />
          <path
            strokeWidth={10}
            d="M18.764 214.302c-10.452.963-14.892 6.34-13.318 16.13"
          />
          <path
            strokeWidth={8}
            d="M19.478 213.985c5.204 3.524 7.415 8.49 6.633 14.898"
          />
        </g>
        <g strokeLinecap="round">
          <path
            strokeWidth={8}
            d="M77.66 166.597c32.535 6.817 48.394 22.719 47.576 47.705"
          />
          <path
            strokeWidth={10}
            d="M125.236 214.302c10.452.963 14.892 6.34 13.318 16.13"
          />
          <path
            strokeWidth={8}
            d="M124.522 213.985c-5.204 3.524-7.415 8.49-6.633 14.898"
          />
        </g>
        <path
          fill="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M93.662 111.576c1.877 5.626 2.815 9.973 2.815 13.043 0 3.07-.938 7.417-2.815 13.043l-23.238-13.043 23.238-13.043z"
        />
        <path
          fill="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M47.424 111.576c-2.043 5.633-3.064 9.98-3.064 13.043 0 3.062 1.021 7.41 3.064 13.043l15.16-8.51 8.078-4.533-23.238-13.043z"
        />
      </g>
    </svg>
  )
}

export default function ConsultingSection() {
  return (
    <Section id="consulting">
      <SectionLeft>
        <TuxFigure height="320px" />
      </SectionLeft>
      <SectionRight>
        <h1 className="text-green accent-font">Consulting</h1>
        <p>
          Given an option between cooking an eating, I would go for the latter.
          I <strong>love</strong> eating food. I will post photos, videos,
          recipes and reviews of things I eat.
        </p>
      </SectionRight>
      <PrevSection id="food" />
    </Section>
  )
}
