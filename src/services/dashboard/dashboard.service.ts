import {TCaseTypes} from "@/services/dashboard/types";
import apiService, {ApiResponse} from "@/services/api.service.ts";

async function fetchCaseTypes() {
    return await apiService.get<ApiResponse<TCaseTypes>>('/case/get-case-types');
}

async function filterCases() {
    try {
        // const response = await apiService.get<TCaseTypes[]>('/case/get-case-types');
        // const caseTypes = response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

export {fetchCaseTypes, filterCases}