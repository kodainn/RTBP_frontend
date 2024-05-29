import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

import BookStatusCard from "../templates/BookStatusCard";
import StudyingBookStatusCard from "../templates/StudyingBookStatusCard";
import StudyingStatusCard from "../templates/StudyingStatusCard";
import SuccessAlertMessage from "../parts/SuccessAlertMessage";
import { useCookies } from "react-cookie";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";

type StudyBookProgressResponse = {
    study_books_completed_count:  number,
    study_books_incomplete_count: number,
    start_study_period_on:        string,
    end_study_period_on:          string
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

const fetchStudyBookProgress = (accessToken: string, navigate: NavigateFunction): StudyBookProgressResponse | null => {
    const [ data, setData ] = useState<StudyBookProgressResponse | null>(null);

    useEffect(() => {
        axios.get(process.env.VITE_API_URL + "/dashboard/study-book-progress", {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((res: AxiosResponse<any>) => {
            if(res.status === 200) {
                setData(res.data);
            }
        })
        .catch((error: AxiosError<any>) => {
            if(error.response?.status === 401) {
                navigate("/login", {state: {message: "ログインしてください。", type: "faild"}});
            }
        });
    }, [])

    return data;
}


const fetchStudyTimes = (accessToken: string, navigate: NavigateFunction): StudyTimesResponse | null => {
    const [ data, setData ] = useState<StudyTimesResponse | null>(null);
    useEffect(() => {
        axios.get(process.env.VITE_API_URL + "/dashboard/study-times", {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((res: AxiosResponse<any>) => {
            if(res.status === 200) {
                setData(res.data);
            }
        })
        .catch((error: AxiosError<any>) => {
            if(error.response?.status === 401) {
                navigate("/login", {state: {message: "ログインしてください。", type: "faild"}});
            }
        });
    }, []);

    return data;
}


const fetchBookCounts = (accessToken: string, navigate: NavigateFunction): BookCountsResponse | null => {
    const [ data, setData ] = useState<BookCountsResponse | null>(null);
    useEffect(() => {
        axios.get(process.env.VITE_API_URL + "/dashboard/book-counts", {
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        })
        .then((res: AxiosResponse<any>) => {
            if(res.status === 200) {
                setData(res.data);
            }
        })
        .catch((error: AxiosError<any>) => {
            if(error.response?.status === 401) {
                navigate("/login", {state: {message: "ログインしてください。", type: "faild"}});
            }
        });
    }, []);

    return data;
}


const DashboardView: React.FC = () => {

    const navigate = useNavigate();

    const [ cookies ] = useCookies();
    const accessToken = cookies.access_token;

    const StudyBookProgress = fetchStudyBookProgress(accessToken, navigate);
    const StudyTimes = fetchStudyTimes(accessToken, navigate);
    const BookCounts = fetchBookCounts(accessToken, navigate);

    const dashboardStatus = useLocation().state;

    return (
        <>
            <div className="mt-12 ml-24 w-[60%]">
            {dashboardStatus !== null && dashboardStatus.type === "success" && <SuccessAlertMessage message={dashboardStatus.message} />}
            </div>
            <div className="mt-24 ml-24 mr-24">
                {StudyBookProgress === null && StudyTimes === null && BookCounts === null && <div>Loading...</div>}
                {StudyBookProgress && StudyTimes && BookCounts && (
                    <StudyingBookStatusCard
                        studyBooksCompletedCount={StudyBookProgress.study_books_completed_count}
                        studyBooksIncompleteCount={StudyBookProgress.study_books_incomplete_count}
                        startStudyPeriodOn={StudyBookProgress.start_study_period_on}
                        endStudyPeriodOn={StudyBookProgress.end_study_period_on}
                    />
                )}
            </div>
            <div className="mt-24 ml-24 mr-24">
                {StudyBookProgress && StudyTimes && BookCounts && (
                    <StudyingStatusCard
                        studyMinutesTotal={StudyTimes.study_minutes_total}
                        studyMinutesByMonthly={StudyTimes.study_minutes_by_monthly}
                    />
                )}
            </div>
            <div className="mt-24 ml-24 mr-24 mb-24">
                {StudyBookProgress && StudyTimes && BookCounts && (
                    <BookStatusCard
                        bookTotalCount={BookCounts.book_total_count}
                        bookCountByShelve={BookCounts.book_count_by_shelve}
                    />
                )}
            </div>
        </>
    );
};

export default DashboardView;