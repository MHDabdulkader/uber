import React from 'react'

const CustomDropdown = ({label, options, value, onChange}) => {
  console.log(options)
  return (
    <div>
      <label className='block text-sm font-medium text-gray-800'>{label}</label>
      <div className='relative mt-1'>
        <select 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className='w-full p-2 '
        >
          <options value="">
            Select {label}
          </options>
          {
            options.map((option) =>(
              <options key={option} value={option}>
                 {option.charAt(0).toUpperCase() + option.slice(1)}
              </options>
            ))
          }
        </select>
      </div>
    </div>
  )
}

export default CustomDropdown