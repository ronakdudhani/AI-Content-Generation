import React from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'

interface PROPS {
    params: {
        'template-slug': string
    }
}

function CreateNewContent(props: PROPS) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <FormSection />

            <OutputSection />
        </div>
    )
}

export default CreateNewContent