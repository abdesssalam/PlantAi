import { View, Text, TouchableOpacity, FlatList, TextInput, KeyboardAvoidingView } from 'react-native'
import { useState, useEffect } from 'react'
import responsive, { normalizeFont } from '../../constants/responsive'
import { useNavigation, useRoute } from '@react-navigation/native'
import COLORS from '../../constants/COLORS'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPen, faPenSquare, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { add_note_service, edit_note_service, get_notes_service, remove_note_service } from '../../services/PlantsService'


export default function NoteScreen() {
    const navigation = useNavigation()
    const route = useRoute();
    const [text, setText] = useState('')
    const [id, setId] = useState(-1)
    const [mode, setMode] = useState('add')
    const [notes, setNotes] = useState([]);
    let plant_id = (route.params?.plant_id)

    useEffect(() => {
        get_notes()
    }, [])
    useEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: {
                // backgroundColor: 'red',
                display: "none",

            }
        });
        return () => navigation.getParent()?.setOptions({
            tabBarStyle: undefined
        });
    }, [navigation]);

    const get_notes = async () => {
        console.log('getting note')
        try {
            const notes_service = await get_notes_service(plant_id);
            setNotes(notes_service)
        } catch (e) {

        }
    }
    const handle_press_add_edit = async () => {
        try {
            let res;
            if (mode === 'add') {
                res = await add_note_service(plant_id, text)
            } else {
                console.log(id)
                res = await edit_note_service(id, text)
                setMode('add')

            }
            await get_notes()
            //console.log(res)
        } catch (e) {
        }
        setText('')
    }

    const show_update = (note) => {
        setText(note.text)
        setId(note.id)
        setMode('update')
    }
    const delete_note = async (note) => {
        try {
            const res = await remove_note_service(note.id);
            get_notes()
        } catch (e) {

        }
    }
    return (
        <KeyboardAvoidingView behavior='height'
            style={{
                backgroundColor: '#fff',
                flex: 1,
                alignItems: 'center',
                position: 'relative'
            }}
        >
            <Text style={{
                fontSize: normalizeFont(14),
                fontWeight: '600',
                fontFamily: 'Poppins',
                width: '90%',
                paddingVertical: normalizeFont(10),
                color: '#0d0d0d',
                height: responsive.WINDOW_HEIGHT * 0.10,

            }}>Votre remarques </Text>
            <FlatList data={notes} renderItem={({ item }) => <DrawNoteCard note={item} show_update={show_update} delete_note={delete_note} />} />

            <View
                style={{
                    width: '100%',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    backgroundColor: '#fff',
                    height: responsive.WINDOW_HEIGHT * 0.10,
                    elevation: 5,
                    flexDirection: 'row',
                    // alignItems: 'center'
                }}
            >
                <TextInput
                    value={text}
                    onChangeText={(v) => setText(v)}
                    placeholder='Ajouter votre remarque'
                    placeholderTextColor='#6e6d6d'
                    style={{
                        width: '80%',
                        paddingLeft: normalizeFont(16),
                        color: '#000',
                        fontSize: normalizeFont(16),
                        // height: '100%'
                    }}
                />
                <TouchableOpacity
                    onPress={handle_press_add_edit}
                    style={{
                        width: '20%',
                        backgroundColor: mode === 'add' ? COLORS.GREEN_LIGHT : '#53B9F2',
                        paddingVertical: normalizeFont(10),
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <FontAwesomeIcon icon={mode === 'add' ? faPlus : faPen} size={25} color='#fff' />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView >

    )
}

const DrawNoteCard = ({ note, show_update, delete_note }) => {
    return (
        <TouchableOpacity
            onPress={() => { show_update(note) }}
            style={{
                backgroundColor: '#fff',
                paddingVertical: normalizeFont(10),
                borderRadius: 10,
                width: '100%',
                elevation: 5,
                marginVertical: normalizeFont(5),
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <View style={{ width: '80%', }}>
                <Text
                    style={{
                        color: '#000',
                        fontSize: normalizeFont(12),
                        textAlign: 'left',
                        marginBottom: normalizeFont(8),

                    }}
                >{note.text}
                </Text>
                <Text style={{ color: COLORS.LIGHT_BLACK }}>{note.created_at}</Text>
            </View>

            <TouchableOpacity
                onPress={() => { delete_note(note) }}
            >
                <FontAwesomeIcon icon={faTrashCan} color='#EC4F4F' size={25} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

