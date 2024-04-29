import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomText from '../components/CustomText';
import themeStyles from '../styles/themeStyles';
import globalStyles from '../styles/globalStyles';
import * as Animatable from 'react-native-animatable';

const QuizScreen = () => {

    const navigation = useNavigation();
    const quizData = [
        {
            id: 1,
            type: 'info',
            question: 'here is method how to multiply',
            image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Simple_multiplication.png",
        },
        {
            id: 2,
            type: 'info',
            question: 'here is single num multiplication',
            image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Simple_multiplication.png",
        },
        {
            id: 3,
            type: 'info',
            question: 'here is double num multiplication',
            image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Simple_multiplication.png",
        },
        {
            id: 4,
            type: 'mcqs',
            question: '12 x 8',
            options: [
                { isRight: false, answer: '10' },
                { isRight: false, answer: '112' },
                { isRight: false, answer: '82' },
                { isRight: true, answer: '96' },
            ]
        },
        {
            id: 5,
            type: 'mcqs',
            question: '8 x 8',
            options: [
                { isRight: false, answer: '62' },
                { isRight: false, answer: '58' },
                { isRight: true, answer: '64' },
                { isRight: false, answer: '46' },
            ]
        },
    ];
    const questionTypes = { info: 'info', mcqs: 'mcqs' };

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [btnColor, setBtnColor] = useState(themeStyles.SECONDARY);
    const [isCorrectMcq,setIsCorrectMcq] = useState(true)

    useEffect(() => { setCurrentQuestion(quizData[currentIndex]) }, [currentIndex]);

    const fnOnNextQuestion = () => {
        if (currentQuestion?.type == questionTypes.mcqs) {
            const selectedMcq = currentQuestion?.options?.find((x) => x?.answer == selectedOption?.answer);
            selectedMcq?.isRight ? setBtnColor('green') : setBtnColor('red');
            setIsCorrectMcq(selectedMcq?.isRight)
            setTimeout(() => {
                setCurrentIndex(prevIndex => prevIndex + 1);
                setBtnColor(themeStyles.SECONDARY);
                setSelectedOption(false);
                if (currentIndex >= quizData.length - 1) { navigation.goBack() }
            }, 1000);
            return;
        }
        setCurrentIndex(prevIndex => prevIndex + 1);
        if (currentIndex >= quizData.length - 1) { navigation.goBack() }

    };

    return (
        <View style={{ ...globalStyles.container }}>
            <CustomText secondary heading style={styles.questionText}>{`Question : ${currentQuestion?.question}`}</CustomText>
            {currentQuestion?.type == questionTypes.info && <Image resizeMode='contain' source={{ uri: currentQuestion?.image }} style={styles.image} />}
            {currentQuestion?.type == questionTypes.mcqs && <View style={styles.mcqContainer}>
                {currentQuestion?.options?.map((option, index) => {
                    return (
                        <TouchableOpacity key={index} style={[styles.mcqBox, selectedOption?.answer == option.answer && { borderWidth: 2 }]} onPress={() => { setSelectedOption(option) }}>
                            <CustomText secondary heading >{option?.answer}</CustomText>
                        </TouchableOpacity>
                    )
                })}
            </View>
            }
            <Animatable.View animation={isCorrectMcq ? (currentQuestion?.type == questionTypes.mcqs) ? null : 'bounceIn' : 'shake'}
                duration={1000}
                direction="alternate"
                style={{backgroundColor:'#FFFFFF',position:'absolute',bottom:'5%',width:'100%'}}
            >
                <TouchableOpacity onPress={() => fnOnNextQuestion()} disabled={currentQuestion?.type == questionTypes.mcqs && !selectedOption} style={{ backgroundColor: currentQuestion?.type == questionTypes.mcqs && !selectedOption ? themeStyles.LIGHT_GREY : btnColor, width: '90%', alignSelf: 'center', borderRadius: 10, alignItems: 'center', paddingVertical: '5%', marginTop: '5%' }} >
                    <CustomText white style={{ fontSize: 22 }}>{(currentQuestion?.type == questionTypes.mcqs) ? 'Save' : 'Next'}</CustomText>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

export default QuizScreen;

const styles = StyleSheet.create({
    image: { height: 300, width: '95%', alignSelf: 'center' },
    questionText: { fontSize: 20, marginVertical: '2%', paddingHorizontal: '2%' },
    mcqBox: { borderColor: themeStyles.SECONDARY, padding: 10, borderWidth: 1, width: '45%', marginVertical: '2.5%', borderRadius: 5 },
    mcqContainer: { flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }
});
// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import { useNavigation } from '@react-navigation/native';
// import CustomText from '../components/CustomText';
// import themeStyles from '../styles/themeStyles';
// import globalStyles from '../styles/globalStyles';

// const QuizScreen = () => {

//     const navigation = useNavigation();
//     const quizData = [
//         {
//             id: 1,
//             type: 'info',
//             question: 'here is method how to multiply',
//             image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Simple_multiplication.png",
//         },
//         {
//             id: 2,
//             type: 'info',
//             question: 'here is single num multiplication',
//             image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Simple_multiplication.png",
//         },
//         {
//             id: 3,
//             type: 'info',
//             question: 'here is double num multiplication',
//             image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Simple_multiplication.png",
//         },
//         {
//             id: 4,
//             type: 'mcqs',
//             question: '12 x 8',
//             options: [
//                 { isRight: false, answer: '10' },
//                 { isRight: false, answer: '112' },
//                 { isRight: false, answer: '82' },
//                 { isRight: true, answer: '96' },
//             ]
//         },
//         {
//             id: 5,
//             type: 'mcqs',
//             question: '8 x 8',
//             options: [
//                 { isRight: false, answer: '62' },
//                 { isRight: false, answer: '58' },
//                 { isRight: true, answer: '64' },
//                 { isRight: false, answer: '46' },
//             ]
//         },
//     ];
//     const questionTypes = { info:'info', mcqs:'mcqs' };

//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [currentQuestion, setCurrentQuestion] = useState(null);
//     const [selectedOption, setSelectedOption] = useState(null);
//     const [btnColor, setBtnColor] = useState(themeStyles.SECONDARY);

//     useEffect(()=>{ setCurrentQuestion(quizData[currentIndex]) },[currentIndex]);

//     const fnOnNextQuestion = () => {
//         if(currentQuestion?.type == questionTypes.mcqs) {
//             const selectedMcq = currentQuestion?.options?.find((x)=>x?.answer == selectedOption?.answer);
//             selectedMcq?.isRight == true ? setBtnColor('green'): setBtnColor('red');
//             setTimeout(() => {
//                 setCurrentIndex(prevIndex => prevIndex + 1);
//                 setBtnColor(themeStyles.SECONDARY);
//                 setSelectedOption(false);
//                 if(currentIndex >= quizData.length-1) { navigation.goBack() }
//             }, 1000);
//             return;
//         }
//         setCurrentIndex(prevIndex => prevIndex + 1);      
//         if(currentIndex >= quizData.length-1) { navigation.goBack() }
            
//     };

//     return (
//         <View style={{...globalStyles.container}}>
//             <CustomText secondary heading style={styles.questionText}>{`Question : ${currentQuestion?.question}`}</CustomText>
//             {currentQuestion?.type == questionTypes.info && <Image resizeMode='contain' source={{ uri: currentQuestion?.image }} style={styles.image} />}
//             {currentQuestion?.type == questionTypes.mcqs && <View style={styles.mcqContainer}>
//                 {currentQuestion?.options?.map((option, index)=>{
//                     return (
//                         <TouchableOpacity key={index} style={[styles.mcqBox, selectedOption?.answer == option.answer && { borderWidth: 2}]} onPress={()=>{setSelectedOption(option)}}>
//                             <CustomText secondary heading >{option?.answer}</CustomText>
//                         </TouchableOpacity>
//                     )
//                 })}
//             </View>
//             }
//             <TouchableOpacity onPress={()=>fnOnNextQuestion()} disabled={currentQuestion?.type == questionTypes.mcqs && !selectedOption} style={{ backgroundColor:currentQuestion?.type == questionTypes.mcqs && !selectedOption ? themeStyles.LIGHT_GREY : btnColor, width: '90%', alignSelf: 'center', borderRadius: 10, alignItems: 'center', paddingVertical: '5%', marginTop: '5%' }} >
//                 <CustomText white style={{ fontSize: 22 }}>{(currentQuestion?.type == questionTypes.mcqs) ? 'Save' : 'Next'}</CustomText>
//             </TouchableOpacity>
//         </View>
//     )
// }

// export default QuizScreen;

// const styles = StyleSheet.create({
//     image: { height: 300, width: '95%', alignSelf: 'center' },
//     questionText:{ fontSize: 20, marginVertical: '2%', paddingHorizontal: '2%' },
//     mcqBox:{ borderColor: themeStyles.SECONDARY, padding: 10, borderWidth: 1, width:'45%', marginVertical:'2.5%', borderRadius:5 },
//     mcqContainer:{flexDirection:'row', justifyContent:'space-around', flexWrap:'wrap'}
// });