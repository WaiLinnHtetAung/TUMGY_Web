import { Link } from "react-router-dom"
import Container from "../../../components/Container"
import { LuArrowUpRight} from "react-icons/lu"
import React from "react"
import { announcementTypes } from "../../../types/landingPageTypes"
import ErrorPage from "../../../components/ErrorPage"
import SectionLoading from "../../../components/SectionLoading"
import AnnCard from "../../announcements/components/AnnCard"


const Announcement: React.FC<announcementTypes> = ({ announcements, error, isLoading }) => {
  return (
    <Container>
        <div className="flex items-center justify-between mb-10">
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-3 text-slate-700">Announcements</h2>
            <Link to="/announcements" className="flex items-center gap-3 underline text-rose-700 hover:text-green-800 font-bold">View All <LuArrowUpRight size={20} /></Link>
        </div>
        { error && (
            <ErrorPage />
        )}

        { isLoading && (
            <SectionLoading />
        ) }
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            { (announcements && announcements.length > 0) && announcements.map((announcement: any) => (
                <AnnCard key={announcement.id} announcement={announcement} />
            ))}
        </div>
        {(announcements && announcements.length === 0) && (
            <div className="flex items-center justify-center">
                <h3 className="text-rose-600 font-semibold text-lg text-center">No announcements found</h3>
            </div>
        )}
    </Container>
  )
}

export default Announcement
