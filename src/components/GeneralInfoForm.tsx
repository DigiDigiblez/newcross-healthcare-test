import React, { useState } from 'react';
import { Button, CustomInput, FormGroup, Input, Label, ListGroup, ListGroupItem } from 'reactstrap';
import _GeneralInfoForm from './styles/_GeneralInfoForm';
import slugify from '../helper/slugify';
import * as skills from '../data/skills.json';

const GeneralInfoForm: React.FC = props => {
    let originalOptions: any = [];
    // Collate a list of JSON skill options.
    skills.skills.map(skill => (
        originalOptions.push(skill)
    ));

    const [options, setOptions] = useState([...originalOptions]);
    const [addSkillOptionHidden, setAddSkillOptionHidden] = useState(true);
    const [additionalSkill, setAdditionalSkill] = useState('');
    const [formData, setFormData] = useState({
        clientSummary: '',
        startDate: null,
        endDate: null,
        skills: ['Certified Practitioner'],
        genderPreference: null
    });

    const addSkillToList = (e: any) => {
        // Remove skill from options list if the skill isn't custom.
        if (e.target.id !== 'custom') {
            const newOptions = options.filter(option => option !== e.target.value);
            setOptions([...newOptions]);
        } else {
            // Toggle off add skill element until requested again.
            toggleAddInput();
            // Clear element value.
            setAdditionalSkill('');
        }

        // Add skill to skill set.
        setFormData({
            ...formData,
            skills: [...formData.skills, e.target.value]
        });
    };

    const removeSkillFromList = (e: any) => {
        // Remove skill from skill set.
        const newSkillSet = formData.skills.filter(skill => skill !== e.target.id);
        setFormData({
            ...formData,
            skills: [...newSkillSet]
        });

        // Add skill back to options list if the skill exists in the JSON data (isn't custom).
        if (originalOptions.includes(e.target.id)) {
            setOptions([...options, e.target.id]);
        }
    };

    const handleChange = (e: any): void => {
        if (e.target.name === 'client-summary')
            setFormData({...formData, clientSummary: e.target.value});
        else if (e.target.name === 'start-date')
            setFormData({...formData, startDate: e.target.value});
        else if (e.target.name === 'end-date')
            setFormData({...formData, endDate: e.target.value});
        else if (e.target.name === 'gender-preference')
            setFormData({...formData, genderPreference: e.target.value});
    };

    const toggleAddInput = () => {
        // Toggle add skill input.
        setAddSkillOptionHidden(!addSkillOptionHidden);
    };

    const logData = (e: any): void => {
        e.preventDefault();

        if (formData.skills.length > 0) {
            console.log(formData);
        } else {
            alert('YOU MUST CHOOSE AT LEAST ONE SKILL TO PROCEED!');
        }
    };

    return (
        <_GeneralInfoForm>
            <form onSubmit={logData}>
                <div className='form-wrapper'>
                    <div className='field-container'>
                        <h4>Client summary</h4>
                        <div className='inner-field-container'>
                            <Input type='textarea' name='client-summary' id='client-summary'
                                   placeholder='Please add summary of the client and why they need care...'
                                   required onChange={handleChange} />
                        </div>
                    </div>

                    <div className='field-container'>
                        <h4>Duration of package</h4>
                        <div className='separated-fields-container'>

                            <div className='row'>
                                <div className='start-date-container'>
                                    <Label htmlFor='start-date'>Start Date</Label>
                                    <Input type='date' name='start-date' id='exampleDate'
                                           placeholder='date placeholder' required onChange={handleChange} />
                                </div>
                            </div>

                            <div className='end-date-container'>
                                <Label>End Date</Label>
                                <FormGroup tag="fieldset" className='fieldset'>
                                    <div className='radio-item'>
                                        <Input type="radio" name="end-date" value='Ongoing'
                                               onChange={handleChange} required />{' '}
                                        <Label htmlFor='end-date'>Ongoing</Label>
                                    </div>
                                    <div className='radio-item'>
                                        <Input type="radio" name="end-date" value='Specific'
                                               onChange={handleChange} required />{' '}
                                        <Label htmlFor='end-date'>Specific</Label>
                                    </div>
                                </FormGroup>
                            </div>
                        </div>
                    </div>

                    <div className='field-container'>
                        <h4>Skills & competencies required</h4>
                        {/* List of skill options. */}
                        <div className='inner-field-container'>
                            <CustomInput type='select' onChange={addSkillToList} multiple>
                                <option disabled>Select Skill or Competency</option>
                                <option disabled>-----------------------------</option>
                                {options.map(option => (
                                    <option key={slugify(option)} value={option}>{option}</option>
                                ))}
                            </CustomInput>
                        </div>

                        {/* Makes element to add custom skill accessible when clicked (gets hidden when element is shown). */}
                        <div>
                            <a hidden={!addSkillOptionHidden} onClick={toggleAddInput}>
                                <p>+ Add Additional Skill</p>
                            </a>
                        </div>

                        {/* Let user add an custom skill (hide element until needed by user). */}
                        <div hidden={addSkillOptionHidden}>
                            <Input type='text' value={additionalSkill}
                                   placeholder='What skill would you like to add?'
                                   onChange={e => {
                                       setAdditionalSkill(e.target.value);
                                   }}
                            />
                            <Button value={additionalSkill} id='custom' onClick={addSkillToList}>+</Button>
                        </div>

                        {/* List of skills chosen. */}
                        <ListGroup>
                            {formData.skills.map(skill => (
                                <ListGroupItem><
                                    span className='delete-button' id={skill}
                                         onClick={removeSkillFromList}>[ X ]</span> {skill}
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </div>

                    <div className='field-container'>
                        <h4>Staff gender preferences</h4>
                        <div className='inner-field-container'>
                            <FormGroup tag="fieldset" className='gender-preference-container'>
                                <div className='radio-item vertical'>
                                    <Input type="radio" name="gender-preference" value='None'
                                           required onChange={handleChange} />{' '}
                                    <Label htmlFor='gender-preference'>None</Label>
                                </div>
                                <div className='radio-item vertical'>
                                    <Input type="radio" name="gender-preference" value='Male'
                                           required onChange={handleChange} />{' '}
                                    <Label htmlFor='gender-preference'>Male</Label>
                                </div>
                                <div className='radio-item vertical'>
                                    <Input type="radio" name="gender-preference" value='Female'
                                           required onChange={handleChange} />{' '}
                                    <Label htmlFor='gender-preference'>Female</Label>
                                </div>
                            </FormGroup>
                        </div>
                    </div>
                </div>

                <hr />
                <Button type='submit'>NEXT</Button>
            </form>

        </_GeneralInfoForm>
    );
};

GeneralInfoForm.propTypes = {};

export default GeneralInfoForm;
