import React from "react";

function Skills() {
  return (
    <div className="h-screen">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-[var(--inner-gutter)]">
        <div class="">
          <a class="bg-[#fff] text-[#202123] rounded-lg w-full flex items-start p-spacing-4 gap-x-16 h-full">
            <div class="flex flex-col">
              <span class="font-semibold text-lg">Coding Wizard</span>
              <span class="block text-sm mt-[0.5em]">
                Debugs and improves code to meet specific standards.
              </span>
            </div>
          </a>
          <img
            class="w-[46px] md:w-[64px] lg:w-[92px] aspect-square shrink-0 rounded-full block ml-auto"
            src="https://cdn.openai.com/chatgpt-enterprise/gpts/r1/coding-wizard.png"
            loading="lazy"
            alt="Coding Wizard"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
