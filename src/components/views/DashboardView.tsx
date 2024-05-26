import { useState, useEffect } from "react";
import axios from "axios";

import BookStatusCard from "../templates/BookStatusCard";
import StudyingBookStatusCard from "../templates/StudyingBookStatusCard";
import StudyingStatusCard from "../templates/StudyingStatusCard";

type StudyBookProgressResponse = {
    study_books_completed_count:  number,
    study_books_incomplete_count: number,
    start_study_period_on:        Date,
    end_study_period_on:          Date
};

type StudyTimesResponse = {
    study_minutes_total: number,
    study_minutes_by_monthly: {
        year:          number,
        month:         number,
        study_minutes: number
    }[]
};

type BookCountsResponse = {
    book_total_count: number,
    book_count_by_shelve: {
        shelve_name: string,
        book_count:  number
    }[]
};

const fetchStudyingBookStatus = () => {
    const [ data, setData ] = useState<StudyBookProgressResponse | null>(null);

    useEffect(() => {
        const fetchData = async() => {
            const res = await axios.get(import.meta.env.VITE_API_URL + "/dashboard/study-book-progress");
            setData(res.data);
        }
        fetchData()
    }, [])

    return data;
}


const fetchStudyingStatus = () => {
    const [ data, setData ] = useState<StudyTimesResponse | null>(null);
    const fetchData = async() => {
        const res = await axios.get(import.meta.env.VITE_API_URL + "/dashboard/study-times");
        setData(res.data);
    }
    fetchData();

    return data;
}


const fetchBookCounts = () => {
    const [ data, setData ] = useState<BookCountsResponse | null>(null);
    const fetchData = async() => {
        const res = await axios.get(import.meta.env.VITE_API_URL + "/dashboard/book-counts");
        setData(res.data);
    }
    fetchData();

    return data;
}


const DashboardView: React.FC = () => {

    const studyingBookStatus = fetchStudyingBookStatus();
    const studyingStatus = fetchStudyingStatus();
    const bookCounts = fetchBookCounts();


    if(studyingBookStatus === null || studyingStatus === null || bookCounts === null) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="mt-24 ml-24 mr-24">
                <StudyingBookStatusCard
                    studyBooksCompletedCount={studyingBookStatus.study_books_completed_count}
                    studyBooksIncompleteCount={studyingBookStatus.study_books_incomplete_count}
                    startStudyPeriodOn={studyingBookStatus.start_study_period_on}
                    endStudyPeriodOn={studyingBookStatus.end_study_period_on}
                />
            </div>
            <div className="mt-24 ml-24 mr-24">
                <StudyingStatusCard
                    studyMinutesTotal={studyingStatus.study_minutes_total}
                    studyMinutesByMonthly={studyingStatus.study_minutes_by_monthly}
                />
            </div>
            <div className="mt-24 ml-24 mr-24 mb-24">
                <BookStatusCard
                    bookTotalCount={bookCounts.book_total_count}
                    bookCountByShelve={bookCounts.book_count_by_shelve}
                />
            </div>
        </>
    );
};

export default DashboardView;