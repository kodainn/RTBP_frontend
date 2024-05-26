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

const fetchStudyBookProgress = (): StudyBookProgressResponse | null => {
    const [ data, setData ] = useState<StudyBookProgressResponse | null>(null);

    useEffect(() => {
        const fetchData = async() => {
            const res = await axios.get(import.meta.env.VITE_API_URL + "/dashboard/study-book-progress");
            if(res.status === 200) {
                setData(res.data);
            }
        }
        fetchData()
    }, [])

    return data;
}


const fetchStudyTimes = (): StudyTimesResponse | null => {
    const [ data, setData ] = useState<StudyTimesResponse | null>(null);
    useEffect(() => {
        const fetchData = async() => {
            const res = await axios.get(import.meta.env.VITE_API_URL + "/dashboard/study-times");
            if(res.status === 200) {
                setData(res.data);
            }
        }
        fetchData();
    }, []);

    return data;
}


const fetchBookCounts = (): BookCountsResponse | null => {
    const [ data, setData ] = useState<BookCountsResponse | null>(null);
    useEffect(() => {
        const fetchData = async() => {
            const res = await axios.get(import.meta.env.VITE_API_URL + "/dashboard/book-counts");
            if(res.status === 200) {
                setData(res.data);
            }
        }
        fetchData();
    }, []);

    return data;
}


const DashboardView: React.FC = () => {

    const StudyBookProgress = fetchStudyBookProgress();
    const StudyTimes = fetchStudyTimes();
    const BookCounts = fetchBookCounts();


    if(StudyBookProgress === null || StudyTimes === null || BookCounts === null) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="mt-24 ml-24 mr-24">
                <StudyingBookStatusCard
                    studyBooksCompletedCount={StudyBookProgress.study_books_completed_count}
                    studyBooksIncompleteCount={StudyBookProgress.study_books_incomplete_count}
                    startStudyPeriodOn={StudyBookProgress.start_study_period_on}
                    endStudyPeriodOn={StudyBookProgress.end_study_period_on}
                />
            </div>
            <div className="mt-24 ml-24 mr-24">
                <StudyingStatusCard
                    studyMinutesTotal={StudyTimes.study_minutes_total}
                    studyMinutesByMonthly={StudyTimes.study_minutes_by_monthly}
                />
            </div>
            <div className="mt-24 ml-24 mr-24 mb-24">
                <BookStatusCard
                    bookTotalCount={BookCounts.book_total_count}
                    bookCountByShelve={BookCounts.book_count_by_shelve}
                />
            </div>
        </>
    );
};

export default DashboardView;