import React, { useState } from 'react';
import {
    Text,
    TextInput,
    Image,
    Pressable,
    View,
    Switch,
    TouchableOpacity,
    StatusBar,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useForm, Controller, FieldValues } from 'react-hook-form';

import {
    responsiveFontSize,
    responsiveWidth,
    responsiveHeight,
} from 'react-native-responsive-dimensions';
type AvailabilityOption = 'day' | 'weekday' | 'weekends' | 'evenings' | 'nights';
// Define form data types
interface FormData {
    name: string;
    phone: string;
    age: string;
    ssn: string;
    driverLicense: string;
    expirationMonth: string;
    expirationDay: string;
    expirationYear: string;
    availability: AvailabilityOption;
}

const AVAILABILITY_OPTIONS_ROW1: { label: string; value: AvailabilityOption }[] = [
    { label: 'Day', value: 'day' },
    { label: 'Weekdays', value: 'weekday' },
    { label: 'Weekends', value: 'weekends' },
];

const AVAILABILITY_OPTIONS_ROW2: { label: string; value: AvailabilityOption }[] = [
    { label: 'Evenings', value: 'evenings' },
    { label: 'Nights', value: 'nights' },
];

const RadioButton = ({ selected }: { selected: boolean }) => (
    <View style={styles.radioOuter}>
        {selected && <View style={styles.radioInner} />}
    </View>
);
export default function PersonalInfo() {
    const navigation = useNavigation();
    const [secureEntry, setSecureEntry] = useState<boolean>(true);

    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<FormData>({
        defaultValues: {
            name: '',
            phone: '',
            age: '',
            ssn: '',
            driverLicense: '',
            expirationMonth: '',
            expirationDay: '',
            expirationYear: '',
            availability: 'day', // Default value
        },
    });


    // Toggle password visibility
    const togglePasswordVisibility = (): void => {
        setSecureEntry(!secureEntry);
    };

    // Form submission handler


    const month = watch('expirationMonth');
    const day = watch('expirationDay');
    const year = watch('expirationYear');

    const validateMonth = (value: string) => {
        const monthNum = parseInt(value);
        if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
            return 'Invalid month';
        }
        return true;
    };

    const validateDay = (value: string) => {
        const dayNum = parseInt(value);
        const monthNum = parseInt(month);
        const yearNum = parseInt(year);

        if (isNaN(dayNum) || dayNum < 1) {
            return 'Invalid day';
        }

        // Get last day of the month
        const lastDay = new Date(yearNum, monthNum, 0).getDate();
        if (dayNum > lastDay) {
            return `Invalid day for month ${monthNum}`;
        }
        return true;
    };

    const validateYear = (value: string) => {
        const yearNum = parseInt(value);
        const currentYear = new Date().getFullYear();

        if (isNaN(yearNum) || yearNum < currentYear) {
            return 'Year must be current or future';
        }
        if (yearNum > currentYear + 20) {
            return 'Year cannot be more than 20 years in future';
        }
        return true;
    };

    const onSubmit = (data: FormData) => {
        console.log('Form submitted:', data);
        navigation.navigate('Home')
        // Handle form submission here
    };


    return (
        <View style={styles.container}>
            <StatusBar
                hidden={false}
                barStyle="dark-content"
                animated={true}
                translucent
                backgroundColor="transparent"
            />

            {/* Header Images */}
            <View style={{ flexDirection: 'row', width: responsiveWidth(100), zIndex: 1, position: 'absolute', justifyContent: 'space-between' }}>
                <Image source={require('../assets/Ellipse2.png')} style={{ width: responsiveWidth(54), height: responsiveHeight(26) }} />
                <Image source={require('../assets/Vector142.png')}
                    style={{
                        width: responsiveWidth(25),
                        height: responsiveHeight(50)
                    }} />
            </View>

            {/* Navigation Back & Logo */}
            <View style={{

                marginLeft: "5%",
                marginTop: "7%",
                zIndex: 2,
                alignSelf: 'flex-start',
                flexDirection: 'row',
                width: responsiveWidth(62),
                justifyContent: 'space-between'
            }}>
                <TouchableOpacity style={{
                    backgroundColor: "white",
                    // paddingRight: "2%",
                    marginTop: "10%",
                    borderRadius: 50,
                    height: responsiveHeight(6),
                    width: responsiveWidth(11.5),
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                    onPress={() =>
                        navigation.goBack()}
                >
                    <Image source={require('../assets/Back.png')} style={{
                        width: responsiveWidth(2),
                        height: responsiveHeight(2)
                    }} />
                </TouchableOpacity>
                <Image source={require('../assets/deliverlogo.png')}
                    style={styles.logo}
                />
            </View>

            {/* Title and Subtitle */}
            <Text style={styles.subtitle}>personal information</Text>
            <View style={styles.rectangle}>
                <Text style={{ alignSelf: 'center', marginTop: "7%", fontFamily: 'Sen-Medium', color: "#32343E", fontSize: responsiveFontSize(1.5) }}>ENTER YOUR PHONE AND OR EMAIL</Text>
                <Text style={{ alignSelf: 'center', marginTop: "7%", fontFamily: 'Sen-Regular', color: "#A0A5BA", fontSize: responsiveFontSize(1.7) }}>Please enter your Phone number And Email </Text>
                <ScrollView
                 showsVerticalScrollIndicator={false}  // Hide vertical scrollbar
                 showsHorizontalScrollIndicator={false}
                >
                    <Controller
                        control={control}
                        name="name"
                        rules={{ required: 'Name is required' }}
                        render={({ field: { onChange, value } }) => (
                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>ENTER YOUR NAME</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChange}
                                    value={value}
                                    placeholder="name"
                                />
                                {errors.name && (
                                    <Text style={styles.errorText}>{errors.name.message}</Text>
                                )}
                            </View>
                        )}
                    />

                    {/* Phone Field */}
                    <Controller
                        control={control}
                        name="phone"
                        rules={{
                            required: 'Phone number is required',
                            pattern: {
                                value: /^\d{10}$/,
                                message: 'Please enter a valid 10-digit phone number',
                            },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>PHONE NO</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChange}
                                    value={value}
                                    placeholder="Enter Phone no"
                                    keyboardType="phone-pad"
                                    maxLength={10}
                                />
                                {errors.phone && (
                                    <Text style={styles.errorText}>{errors.phone.message}</Text>
                                )}
                            </View>
                        )}
                    />

                    {/* Age Field */}
                    <Controller
                        control={control}
                        name="age"
                        rules={{
                            required: 'Age is required',
                            min: { value: 18, message: 'Must be at least 18 years old' },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>AGE</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChange}
                                    value={value}
                                    placeholder="age"
                                    keyboardType="numeric"
                                />
                                {errors.age && (
                                    <Text style={styles.errorText}>{errors.age.message}</Text>
                                )}
                            </View>
                        )}
                    />

                    {/* SSN Field */}
                    <Controller
                        control={control}
                        name="ssn"
                        rules={{
                            required: 'SSN is required',
                            pattern: {
                                value: /^\d{9}$/,
                                message: 'Please enter a valid 9-digit SSN',
                            },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>SOCIAL SECURITY NUMBER</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChange}
                                    value={value}
                                    placeholder="Enter SSN"
                                    keyboardType="numeric"
                                    maxLength={9}
                                    secureTextEntry
                                />
                                {errors.ssn && (
                                    <Text style={styles.errorText}>{errors.ssn.message}</Text>
                                )}
                            </View>
                        )}
                    />

                    {/* Driver's License Field */}
                    <Controller
                        control={control}
                        name="driverLicense"
                        rules={{ required: "Driver's license number is required" }}
                        render={({ field: { onChange, value } }) => (
                            <View style={styles.inputContainer}>
                                <Text style={styles.label}>DRIVER'S LICENSE CARD NUMBER</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={onChange}
                                    value={value}
                                    placeholder="Enter driver's license number"
                                />
                                {errors.driverLicense && (
                                    <Text style={styles.errorText}>{errors.driverLicense.message}</Text>
                                )}
                            </View>
                        )}
                    />
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>EXPIRATION DATE</Text>
                        <View style={styles.dateContainer}>
                            <Controller
                                control={control}
                                name="expirationMonth"
                                rules={{
                                    required: 'Required',
                                    validate: validateMonth
                                }}
                                render={({ field: { onChange, value } }) => (
                                    <View style={styles.dateInputWrapper}>
                                        <TextInput
                                            style={styles.dateInput}
                                            onChangeText={onChange}
                                            value={value}
                                            placeholder="MM"
                                            placeholderTextColor={"#A0A5BA"}
                                            keyboardType="numeric"
                                            maxLength={2}
                                        />

                                        {errors.expirationMonth && (
                                            <Text style={styles.dateErrorText}>{errors.expirationMonth.message}</Text>
                                        )}
                                    </View>
                                )}
                            />

                            {/* Day Input */}
                            <Controller
                                control={control}
                                name="expirationDay"
                                rules={{
                                    required: 'Required',
                                    validate: validateDay
                                }}
                                render={({ field: { onChange, value } }) => (
                                    <View style={styles.dateInputWrapper}>
                                        <TextInput
                                            style={styles.dateInput}
                                            onChangeText={onChange}
                                            value={value}
                                            placeholder="DD"
                                            placeholderTextColor={"#A0A5BA"}
                                            keyboardType="numeric"
                                            maxLength={2}
                                        />

                                        {errors.expirationDay && (
                                            <Text style={styles.dateErrorText}>{errors.expirationDay.message}</Text>
                                        )}
                                    </View>
                                )}
                            />

                            {/* Year Input */}
                            <Controller
                                control={control}
                                name="expirationYear"
                                rules={{
                                    required: 'Required',
                                    validate: validateYear
                                }}
                                render={({ field: { onChange, value } }) => (
                                    <View style={styles.dateInputWrapper}>
                                        <TextInput
                                            style={styles.dateInput}
                                            onChangeText={onChange}
                                            value={value}
                                            placeholder="YYYY"
                                            placeholderTextColor={"#A0A5BA"}
                                            keyboardType="numeric"
                                            maxLength={4}
                                        />

                                        {errors.expirationYear && (
                                            <Text style={styles.dateErrorText}>{errors.expirationYear.message}</Text>
                                        )}
                                    </View>
                                )}
                            />
                        </View>
                        {/* Availability Switch */}
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Driver Availability</Text>
                            <Controller
                                control={control}
                                name="availability"
                                rules={{ required: 'Please select availability' }}
                                render={({ field: { onChange, value } }) => (
                                    <View style={styles.radioGroupContainer}>
                                        {/* First Row */}
                                        <View style={styles.radioRow}>
                                            {AVAILABILITY_OPTIONS_ROW1.map((option) => (
                                                <Pressable
                                                    key={option.value}
                                                    style={styles.radioButton}
                                                    onPress={() => onChange(option.value)}
                                                >
                                                    <RadioButton selected={value === option.value} />
                                                    <Text style={styles.radioLabel}>{option.label}</Text>
                                                </Pressable>
                                            ))}
                                        </View>

                                        {/* Second Row */}
                                        <View style={styles.secondRow}>
                                            {AVAILABILITY_OPTIONS_ROW2.map((option) => (
                                                <Pressable
                                                    key={option.value}
                                                    style={[styles.radioButton, styles.radioButtonSecondRow]}
                                                    onPress={() => onChange(option.value)}
                                                >
                                                    <RadioButton selected={value === option.value} />
                                                    <Text style={styles.radioLabel}>{option.label}</Text>
                                                </Pressable>
                                            ))}
                                        </View>
                                    </View>
                                )}
                            />
                            {errors.availability && (
                                <Text style={styles.errorText}>{errors.availability.message}</Text>
                            )}
                        </View>


                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={handleSubmit(onSubmit)}
                        >
                            <Text style={styles.submitButtonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: "5%" }}>

                    </View>
                </ScrollView>

            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FF7622',
    },
    logo: {
        width: responsiveWidth(40),
        height: responsiveHeight(15),
        marginTop: '5%',

    },

    subtitle: {
        fontSize: responsiveFontSize(2),
        color: '#FFFFFF',
        marginTop: '2%',
        fontFamily: 'Sen-Regular'
    },
    rectangle: {
        backgroundColor: "#FFFFFF",
        marginTop: "10%",
        zIndex: 2,
        width: responsiveWidth(100),
        height: responsiveHeight(80),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
    },
    inputContainer: {
        marginTop: "7%",
        justifyContent: 'center',
        alignItems: 'center',
        width: responsiveWidth(90)
    },
    input: {
        marginTop: '3%',
        borderRadius: 10,
        height: responsiveHeight(7),
        width: responsiveWidth(90),
        backgroundColor: "#F0F5FA",
        flexDirection: "row",
        paddingLeft: 15,
        fontFamily: "Sen-Regular",
        alignItems: 'center',
        color: "#000000"
    },
    label: {
        fontSize: responsiveFontSize(1.5),
        fontFamily: 'Sen-Medium',
        color: '#32343E',
        alignSelf: 'flex-start',


    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
    },
    helperText: {
        color: '#666',
        fontSize: 12,
        marginTop: 5,
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: responsiveWidth(90),
        height: responsiveHeight(8),

    },
    dateInputWrapper: {

        width: "30%",

    },
    dateInput: {
        marginLeft: "10%",
        color: "#32343E",
        alignItems: 'center',
        justifyContent: 'center'
    },
    radioOuter: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#F99026',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    radioInner: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: '#F99026',
    },
    radioGroup: {
        marginTop: 8,
        flexDirection: 'row',

        width: responsiveWidth(90),
        height: responsiveHeight(10)
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    radioLabel: {
        fontSize: responsiveFontSize(1.6),
        width: responsiveWidth(20),
        fontFamily: 'Sen-Medium',
        color: '#A0A5BA',
        backgroundColor: 'red'
    },
    submitButton: {
        height: responsiveHeight(7.5),
        width: responsiveWidth(90),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginTop: '5%',
        backgroundColor: '#FF7622'
    },
    submitButtonText: {
        fontFamily: "Sen-Medium",
        fontSize: responsiveFontSize(1.7),
        color: "#FFFFFF",

    },
    secondRow: {
        flexDirection: 'row',
        fontFamily: 'Sen-Medium',
    backgroundColor: "red"
    },
    radioRow: {
        flexDirection: 'row',
        fontFamily: 'Sen-Medium',
        

    },
    dateErrorText: {
        color: 'red',
        fontSize: 10,
        textAlign: 'center',
        marginTop: 5,
      },
      radioGroupContainer: {
      
        width: responsiveWidth(90)
      }
})