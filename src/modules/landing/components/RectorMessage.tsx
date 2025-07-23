import React from 'react'
import Container from '../../../components/Container'
import { rectorMessageTypes } from '../../../types/landingPageTypes'
import ErrorPage from '../../../components/ErrorPage'
import SectionLoading from '../../../components/SectionLoading'

const RectorMessage: React.FC<rectorMessageTypes> = ({ rector_message, error, isLoading }) => {
  console.log(rector_message)
  return (
    <Container>
      <h2 className='text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 text-slate-700'>
        Rector's Message
      </h2>

      <article>
        { error && (
            <ErrorPage />
        )}

        { isLoading && (
            <SectionLoading />
        ) }
        
        { rector_message && (
          <>
            <div className='float-right pb-5 ps-0 md:ps-5'>
              <img
                  src={rector_message.image}
                  alt="Rector"
                  className=" w-[500px] lg:w-[700px]  h-auto ml-0 sm:ml-4 mb-2 rounded"
              />
              <h3 className='ps-4 font-bold text-xl text-center'>{rector_message.name}</h3>
              <h3 className='ps-4 font-bold text-xl text-center'>(Technological University - Magway)</h3>

            </div>
            <p
                className="text-justify indent-20 text-base lg:text-lg"
                dangerouslySetInnerHTML={{ __html: rector_message.message }}
            />
          </>
        )}
      </article>
    </Container>
  )
}

export default RectorMessage
