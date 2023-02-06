export * from './DeviceUtils';
export * from './ScaleUtils';
export * from './MergeObject';

export function convertJsonToFormData(data: any) {
    const formData = new FormData();
    for (const i in data) formData.append(i, data[i]);
    return formData;
  }

  export const isNumber = (value: string | number): boolean => {
    return value != null && value !== '' && !isNaN(Number(value.toString()));
  };
